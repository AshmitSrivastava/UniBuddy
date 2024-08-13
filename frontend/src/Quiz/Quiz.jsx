import { useState, useEffect } from "react";
import QuestionsData from "./QuestionsDataset";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [showScorecard, setShowScorecard] = useState(false);

  const handleOnNextClick = () => {
    if (index < QuestionsData.length - 1) {
      setIndex(index + 1);
    } else {
      setShowScorecard(true);
    }
  };

  const checkAnswer = (optionKey) => {
    if (optionKey === QuestionsData[index].correctOption) {
      setPoints((prevPoints) => prevPoints + 1);
      setCorrectCount((prevCount) => prevCount + 1);
      alert("Correct Answer!");
    } else {
      setIncorrectCount((prevCount) => prevCount + 1);
      alert("Incorrect :(");
    }
  };

  useEffect(() => {
    console.log("Updated points:", points);
  }, [points]);

  if (showScorecard) {
    return (
      <div className="scorecard">
        <h2>Quiz Completed!</h2>
        <p>Correct Answers: {correctCount}</p>
        <p>Incorrect Answers: {incorrectCount}</p>
        <p>Percentage Correct: {((correctCount / QuestionsData.length) * 100).toFixed(2)}%</p>
        <button onClick={() => window.location.reload()}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <>
      <div className="question-card">
        <h2>
          {index + 1}. {QuestionsData[index].question}
        </h2>
        <div className="options">
          <ul>
            <li onClick={() => checkAnswer("option1")}>
              <div className="question-number">A</div>
              <div className="question">{QuestionsData[index].options.option1}</div>
            </li>
            <li onClick={() => checkAnswer("option2")}>
              <div className="question-number">B</div>
              <div className="question">{QuestionsData[index].options.option2}</div>
            </li>
            <li onClick={() => checkAnswer("option3")}>
              <div className="question-number">C</div>
              <div className="question">{QuestionsData[index].options.option3}</div>
            </li>
            <li onClick={() => checkAnswer("option4")}>
              <div className="question-number">D</div>
              <div className="question">{QuestionsData[index].options.option4}</div>
            </li>
          </ul>
        </div>
        <button onClick={handleOnNextClick} className="next-button">Next</button>
        <div className="index">{index + 1} of {QuestionsData.length} questions</div>
      </div>
    </>
  );
};

export default Quiz;
