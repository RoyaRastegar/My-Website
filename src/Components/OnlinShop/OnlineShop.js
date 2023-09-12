import React from "react";
import Cart from "./Cart";
import { Products } from "./Data/Data";
import ProductShow from "./ProductShow";

const OnlineShop = () => {
  return (
    <>
      <Cart />
      <div className="row">
        {Products.map((product)=><ProductShow data={product}/>)}
      </div>
    </>
  );
};

export default OnlineShop;
