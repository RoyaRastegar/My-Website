import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handelAdd(e) {
    e.preventDefault();
    setCount((c) => c + step);
  }
  function handelMines(e) {
    e.preventDefault();
    setCount((c) => c - step);
  }
  function handelAddStep(e) {
    e.preventDefault();
    setStep((s) => s + 1);
  }
  function handelMinesStep(e) {
    e.preventDefault();
    setStep((s) => s - 1);
  }
  return (
    <>
      <div className="counter">
        <div className="heder">
          <h1>Counter</h1>
        </div>
        <div className="buttons">
          <button className="button" onClick={handelMinesStep}>
            -
          </button>
          <span className="span">Step : {step} </span>
          <button className="button" onClick={handelAddStep}>
            +
          </button>
          <button className="button" onClick={handelMines}>
            -
          </button>
          <span className="span">Count : {count} </span>
          <button className="button" onClick={handelAdd}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
