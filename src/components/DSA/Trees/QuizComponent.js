import React, { useState } from "react";
import { questions, correctAnswers } from "./QuizData";
import "../../QuizComponent.css";

const QuizComponent = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleSelectAnswer = (question, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [question]: answer });
  };

  const handleSubmit = (question) => {
    const isCorrect = selectedAnswers[question] === correctAnswers[question];
    setFeedback({
      ...feedback,
      [question]: isCorrect
        ? "Correct!"
        : `Incorrect! The correct answer is ${correctAnswers[question]}.`,
    });
  };

  return (
    <div className="quiz-container">
      {questions.map((question) => (
        <div key={question.id} className="question-box">
          {/* Render question text */}
          <h3>{question.text}</h3>
          {/* Render image if available */}
          {question.img && (
            <img src={question.img} alt={`Question ${question.id}`} className="question-image" />
          )}
          <div className="options">
            {Object.keys(question.options).map((key) => (
              <label key={key} className="option-label">
                <input
                  type="radio"
                  name={question.id}
                  onClick={() => handleSelectAnswer(question.id, key)}
                />
                {question.options[key]}
              </label>
            ))}
          </div>
          <button onClick={() => handleSubmit(question.id)}>
            Check Answer
          </button>
          {feedback[question.id] && (
            <p
              className="feedback"
              style={{
                color: feedback[question.id].includes("Correct")
                  ? "green"
                  : "red",
              }}
            >
              {feedback[question.id]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
