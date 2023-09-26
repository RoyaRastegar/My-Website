import React from "react";
import "./Pizaa.css";
const Pizaa = (props) => {
  return (
    <>
      <ul className="pizzas">
        {props.pizzaData.map((piza) => (
          <div>
            <img src={piza.photoName} />
            <h3>{piza.name}</h3>
            <p>{piza.ingredients}</p>
            <p>Price: {piza.price}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Pizaa;
