import re
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
from collections import Counter
from torch.nn.utils.rnn import pad_sequence

# Existing functions for reading and preprocessing text
def read_text(file_path):
    with open(file_path, 'r') as file:
        return file.read()

def split_text(text, max_length=500):
    sentences = re.split(r'\.\s+', text)
    chunks = []
    current_chunk = ""
    for sentence in sentences:
        if len(current_chunk) + len(sentence) > max_length:
            chunks.append(current_chunk.strip())
            current_chunk = sentence + "."
        else:
            current_chunk += sentence + "."
    if current_chunk:
        chunks.append(current_chunk.strip())
    return chunks

def tokenize(text):
    return re.findall(r'\b\w+\b', text.lower())

def build_vocab(texts):
    word_counter = Counter()
    for text in texts:
        word_counter.update(tokenize(text))
    word_to_index = {word: i+2 for i, (word, _) in enumerate(word_counter.most_common())}
    word_to_index["<pad>"] = 0
    word_to_index["<unk>"] = 1
    return word_to_index

def text_to_indices(text, word_to_index):
    return [word_to_index.get(word, word_to_index["<unk>"]) for word in tokenize(text)]

# New attention mechanism
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, num_heads):
        super(MultiHeadAttention, self).__init__()
        self.num_heads = num_heads
        self.d_model = d_model
        assert d_model % self.num_heads == 0
        
        self.depth = d_model // self.num_heads
        self.wq = nn.Linear(d_model, d_model)
        self.wk = nn.Linear(d_model, d_model)
        self.wv = nn.Linear(d_model, d_model)
        self.dense = nn.Linear(d_model, d_model)
        
    def split_heads(self, x, batch_size):
        x = x.view(batch_size, -1, self.num_heads, self.depth)
        return x.permute(0, 2, 1, 3)
    
    def forward(self, q, k, v, mask=None):
        batch_size = q.size(0)
        
        q = self.split_heads(self.wq(q), batch_size)
        k = self.split_heads(self.wk(k), batch_size)
        v = self.split_heads(self.wv(v), batch_size)
        
        scaled_attention_logits = torch.matmul(q, k.transpose(-1, -2)) / torch.sqrt(torch.tensor(self.depth, dtype=torch.float32))
        if mask is not None:
            scaled_attention_logits += (mask * -1e9)
        
        attention_weights = torch.softmax(scaled_attention_logits, dim=-1)
        output = torch.matmul(attention_weights, v)
        output = output.permute(0, 2, 1, 3).contiguous()
        output = output.view(batch_size, -1, self.d_model)
        return self.dense(output)

# New transformer block
class TransformerBlock(nn.Module):
    def __init__(self, d_model, num_heads, d_ff, dropout=0.1):
        super(TransformerBlock, self).__init__()
        self.attention = MultiHeadAttention(d_model, num_heads)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.feed_forward = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Linear(d_ff, d_model)
        )
        self.dropout = nn.Dropout(dropout)
        
    def forward(self, x, mask=None):
        attn_output = self.attention(x, x, x, mask)
        out1 = self.norm1(x + self.dropout(attn_output))
        ff_output = self.feed_forward(out1)
        return self.norm2(out1 + self.dropout(ff_output))

# New model architecture
class QuestionAnsweringModel(nn.Module):
    def __init__(self, vocab_size, d_model, num_heads, num_layers, d_ff, max_length):
        super(QuestionAnsweringModel, self).__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.pos_encoding = nn.Parameter(torch.randn(1, max_length, d_model))
        self.transformer_blocks = nn.ModuleList([TransformerBlock(d_model, num_heads, d_ff) for _ in range(num_layers)])
        self.fc = nn.Linear(d_model, vocab_size)
        
    def forward(self, x):
        x = self.embedding(x) + self.pos_encoding[:, :x.size(1), :]
        for block in self.transformer_blocks:
            x = block(x)
        return self.fc(x)

def train_model(model, train_loader, criterion, optimizer, device, num_epochs=5):
    model.train()
    for epoch in range(num_epochs):
        running_loss = 0.0
        for contexts, questions, answers in train_loader:
            contexts, questions, answers = contexts.to(device), questions.to(device), answers.to(device)
            optimizer.zero_grad()
            
            # Combine questions and contexts
            inputs = torch.cat((questions, contexts), dim=1)
            
            # Get model outputs
            outputs = model(inputs)
            
            # Use only the part of outputs corresponding to the answer length
            outputs = outputs[:, -answers.size(1):, :]
            
            # Reshape outputs and targets for the loss function
            outputs = outputs.contiguous().view(-1, outputs.size(-1))
            targets = answers.contiguous().view(-1)
            
            # Compute the loss
            loss = criterion(outputs, targets)
            
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item()
        
        print(f'Epoch {epoch+1}/{num_epochs}, Loss: {running_loss/len(train_loader)}')

# Function to answer questions
def answer_question(model, question, context, word_to_index, index_to_word, max_length):
    model.eval()
    device = next(model.parameters()).device  # Get the device of the model
    
    question_indices = torch.tensor([text_to_indices(question, word_to_index)[:max_length]], dtype=torch.long).to(device)
    context_indices = torch.tensor([text_to_indices(context, word_to_index)[:max_length]], dtype=torch.long).to(device)
    
    with torch.no_grad():
        output = model(torch.cat((question_indices, context_indices), dim=1))
    
    # Move output back to CPU if it's on GPU
    output = output.cpu()
    
    answer_indices = output.argmax(dim=-1).squeeze().tolist()
    answer_words = [index_to_word.get(i, '<unk>') for i in answer_indices]
    return ' '.join(answer_words)

# Dataset and collate function
class TextDataset(Dataset):
    def __init__(self, contexts, questions, answers, word_to_index, max_length):
        self.contexts = [text_to_indices(c, word_to_index) for c in contexts]
        self.questions = [text_to_indices(q, word_to_index) for q in questions]
        self.answers = [text_to_indices(a, word_to_index) for a in answers]
        self.max_length = max_length
        
    def __len__(self):
        return len(self.questions)
    
    def __getitem__(self, idx):
        context = torch.tensor(self.contexts[idx][:self.max_length], dtype=torch.long)
        question = torch.tensor(self.questions[idx][:self.max_length], dtype=torch.long)
        answer = torch.tensor(self.answers[idx][:self.max_length], dtype=torch.long)
        return context, question, answer

def collate_fn(batch):
    contexts, questions, answers = zip(*batch)
    contexts = pad_sequence(contexts, batch_first=True, padding_value=0)
    questions = pad_sequence(questions, batch_first=True, padding_value=0)
    answers = pad_sequence(answers, batch_first=True, padding_value=0)
    return contexts, questions, answers

# Main execution
if __name__ == "__main__":
    # Load and preprocess text
    text = read_text('alice.txt')
    contexts = split_text(text)
    
    # Generate simple questions and answers (this part needs improvement)
    questions = [f"What happens in this part: {c[:50]}...?" for c in contexts]
    answers = [c[:100] for c in contexts]  # Just using the first 100 chars as the "answer"
    
    # Build vocabulary
    word_to_index = build_vocab(contexts + questions + answers)
    index_to_word = {i: w for w, i in word_to_index.items()}
    
    # Create dataset and dataloader
    max_length = 512
    dataset = TextDataset(contexts, questions, answers, word_to_index, max_length)
    train_loader = DataLoader(dataset, batch_size=8, shuffle=True, collate_fn=collate_fn)
    
    # Initialize model and training components
    vocab_size = len(word_to_index)
    d_model = 256
    num_heads = 8
    num_layers = 3
    d_ff = 512
    
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = QuestionAnsweringModel(vocab_size, d_model, num_heads, num_layers, d_ff, max_length).to(device)
    criterion = nn.CrossEntropyLoss(ignore_index=0)
    optimizer = optim.Adam(model.parameters(), lr=0.001)
    
    # Train the model
    train_model(model, train_loader, criterion, optimizer, device)
    
    # Example usage
    context = "Alice was beginning to get very tired of sitting by her sister on the bank."
    question = "What was Alice doing?"
    print(answer_question(model, question, context, word_to_index, index_to_word, max_length))
