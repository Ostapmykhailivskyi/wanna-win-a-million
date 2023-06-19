import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { goToNextStep, endGame } from "store/appStateSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { Answer, StepItem, Header } from "components";

import "./game-page.css";

function Game() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [popupOpened, setPopupOpened] = useState(false);

  const { currentStep, questions, selectedAnswer } = useAppSelector(
    (state) => state.game
  );

  const processAnswer = () => {
    if (selectedAnswer === questions[currentStep].correctAnswer) {
      if (!questions[currentStep + 1]) {
        dispatch(endGame());
        navigate("/game-over");
      } else {
        dispatch(goToNextStep());
      }
    } else {
      navigate("/game-over");
    }
  };

  const toggleProgressBar = () => {
    setPopupOpened((state) => !state);
  };

  useEffect(() => {
    if (selectedAnswer) {
      setTimeout(() => {
        processAnswer();
      }, 2000);
    }
  }, [selectedAnswer]);

  return (
    <div className="game-body">
      <Header callback={toggleProgressBar} popupOpened={popupOpened} />
      <div className="questions-block">
        <h1 className="question">{questions[currentStep].question}</h1>
        <div className="answers-block">
          {questions[currentStep].answers.map((answer) => (
            <Answer key={answer.id} answerData={answer} />
          ))}
        </div>
      </div>
      <div className="progress-items-list">
        {questions.map((question, index) => (
          <StepItem
            key={question.reward}
            reward={question.reward}
            index={index}
          />
        ))}
      </div>
      {popupOpened && (
        <div className="mobile-progress-items-list">
          {questions.map((question, index) => (
            <StepItem
              key={question.reward}
              reward={question.reward}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Game;
