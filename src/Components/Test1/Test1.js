import React, { useState } from "react";
import "./Test.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Test1 = () => {
  const [step, setStep] = useState(1);
  const [isopen, setIsopen] = useState(true);

  function handelNext() {
    step < 3 ? setStep((s) => s + 1) : setStep(1);
  }
  function handelPrevious() {
    step > 1 ? setStep((s) => s - 1) : setStep(3);
  }
  function handelClose() {
    setIsopen((s) => !s);
  }
  return (
    <>
      <button className="close" onClick={handelClose}>
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <h3>
              Step {step}: {messages[step - 1]}
            </h3>
          </div>
          <div className="buttons">
            <button onClick={handelPrevious}>Previous</button>
            <button onClick={handelNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Test1;
