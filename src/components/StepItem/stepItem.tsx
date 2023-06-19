import React, { useEffect, useState } from "react";

import { useAppSelector } from "store/hooks";

import "./styles.css";

interface propTypes {
  index: number;
  reward: number;
}

function StepItem({ reward, index }: propTypes) {
  const { currentStep } = useAppSelector((state) => state.game);
  const [state, setState] = useState(
    currentStep === index ? "active" : "inactive"
  );

  useEffect(() => {
    if (currentStep === index) {
      setState("active");
    } else if (currentStep < index) {
      setState("inactive");
    } else {
      setState("disabled");
    }
  }, [index, currentStep]);

  return (
    <div className="step-item-component-wrapper">
      <div className={`grey-line ${state}`} />
      <div className={`step-item-content-wrapper ${state}`}>
        <span className="reward">${reward}</span>
      </div>
      <div className={`grey-line ${state}`} />
    </div>
  );
}

export default StepItem;
