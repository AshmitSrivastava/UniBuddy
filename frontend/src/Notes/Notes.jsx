import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const NoteTakingComponent = () => {
  const [notes, setNotes] = useState([]);
  const [editorContent, setEditorContent] = useState('');

  const handleAddNote = () => {
    setNotes([...notes, editorContent]);
    setEditorContent('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Note Taking</h1>
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        modules={modules}
        formats={formats}
        placeholder="Write your note here..."
        className="mb-4"
      />
      <button
        onClick={handleAddNote}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Note
      </button>
      <div className="mt-6">
        {notes.map((note, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded mb-4"
            dangerouslySetInnerHTML={{ __html: note }}
          />
        ))}
      </div>
    </div>
  );
};

// Define the modules for ReactQuill
const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    ['link', 'image'],
    [{ 'align': [] }],
    ['clean']
  ],
};

// Define the formats for ReactQuill
const formats = [
  'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline',
  'link', 'image', 'align', 'clean'
];

export default NoteTakingComponent;
