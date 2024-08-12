import { useState, useEffect } from "react";
import QuestionsData from "./QuestionsDataset";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(QuestionsData[index]);
  const [points, setPoints] = useState(0);

  const handleOnNextClick = () => {
    setIndex(index + 1);
    setQuestion(QuestionsData[index + 1]);
  };

  const checkAnswer = (e, correctOption) => {
    let selectedOption = e.target.textContent;
    console.log(question.correctOption);
    console.log(selectedOption);

    if (selectedOption === question.correctOption) {
      setPoints((prevPoints) => prevPoints + 1);
      alert("Correct Answer!");
      e.target.classList.add("correct");
    } else {
      alert("Incorrect :(");
      e.target.classList.add("wrong");
    }
  };

  useEffect(() => {
    console.log("Updated points:", points);
  }, [points]);

  return (
    <>
      <div className="question-card">
        <h2>
          {index + 1}. {question.question}
        </h2>
        <div className="options">
          <ul>
            <li
              onClick={(e) => {
                checkAnswer(e, 1);
              }}
            >
              <div className="question-number">A</div>
              <div className="question">{question.options.option1}</div>
            </li>
            <li
              onClick={(e) => {
                checkAnswer(e, 2);
              }}
            >
              <div className="question-number">B</div>
              <div className="question">{question.options.option2}</div>
            </li>
            <li
              onClick={(e) => {
                checkAnswer(e, 3);
              }}
            >
              <div className="question-number">C</div>
              <div className="question">{question.options.option3}</div>
            </li>
            <li
              onClick={(e) => {
                checkAnswer(e, 4);
              }}
            >
              <div className="question-number">D</div>
              <div className="question">{question.options.option4}</div>
            </li>
          </ul>
        </div>
        <button onClick={handleOnNextClick}>Next</button>
        <div className="index">1 of 20 questions</div>
      </div>
    </>
  );
};

export default Quiz;
