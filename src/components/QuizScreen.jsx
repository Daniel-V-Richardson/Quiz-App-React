import React, { useState } from "react";
import QuestionList from "../data/questions.json";
import Question from "./Question.js";
import QuizResult from "./QuizResult.js";

const QuizScreen = ({ retry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  console.log(QuestionList[0])
  function calculateResult() {
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex == markedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
    };
  }

  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex+1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex-1] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex+1);
          }}
        />
      )}
    </div>
  );
};

export default QuizScreen;
