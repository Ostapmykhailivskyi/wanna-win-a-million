import React, { useEffect, useState } from "react";
import { AnswerType } from "store/types";
import "./styles.css";
import { selectAnswer } from "store/appStateSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";

interface propsType {
  answerData: AnswerType;
}

function Answer({ answerData }: propsType) {
  const { selectedAnswer, questions, currentStep } = useAppSelector(
    (state) => state.game
  );
  const dispatch = useAppDispatch();
  const [state, setState] = useState("inactive");

  const handleClick = () => {
    if (selectedAnswer) return;
    dispatch(selectAnswer(answerData.id));
  };

  const handleButtonDown = () => {
    setState("selected");
  };

  const handleButtonOut = () => {
    if (state === "selected") {
      setState("inactive");
    }
  };

  useEffect(() => {
    if (selectedAnswer) {
      if (answerData.id === questions[currentStep].correctAnswer) {
        setState("correct");
      }
      if (
        selectedAnswer === answerData.id &&
        selectedAnswer !== questions[currentStep].correctAnswer
      ) {
        setState("wrong");
      }
    } else {
      setState("inactive");
    }
  }, [selectedAnswer]);

  return (
    <div
      className="answer-item-component-wrapper"
      onClick={handleClick}
      onMouseDown={handleButtonDown}
      onMouseOut={handleButtonOut}
      onBlur={handleButtonOut}
      role="button"
      tabIndex={0}
      aria-hidden="true"
    >
      <div className={`grey-line ${state}`} />
      <div className={`answer-item-content-wrapper ${state}`}>
        <div className="answer-item-content">
          <span className="answer-letter-var">{answerData.id}</span>
          <div className="answer-text">{answerData.answer}</div>
        </div>
      </div>
      <div className={`grey-line ${state}`} />
    </div>
  );
}

export default Answer;
