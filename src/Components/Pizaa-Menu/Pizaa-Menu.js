import React from "react";
import { pizzaData } from "./data";
import "./Pizaa.css";
import Pizaa from "./Pizaa";
const PizaaMenu = () => {
  return (
    <div>
      <h1 className="header">- Fast React Pizza Co.-</h1>
      <div className="menu">
        <h2>OUR MENU</h2>
        <p>
          Authentic Italian Cuision. 6 Creative dishes to choose from.All from
          our stone oven.all organic
        </p>
        <Pizaa pizzaData={pizzaData} />
      </div>
      <p className="footer">
        we are open until 22:00.come visit us order online
      </p>
      <button className="orderbtn">Order Now </button>
    </div>
  );
};

export default PizaaMenu;
