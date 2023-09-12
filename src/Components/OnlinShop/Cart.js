import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  return (
    <>
      <div>
        <button className="btnFa">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </>
  );
};

export default Cart;
