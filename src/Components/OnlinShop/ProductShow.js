import React from "react";

const ProductShow = (props) => {
  const { id, dataName, price, dataImg } = props.data;
  return (
    <>
      <div className="col-3">
        <img src={dataImg} className="w-100" alt="imag"/>
        <h3>{dataName}</h3>
        <p>Price: {price}RM</p>
      </div>
    </>
  );
}
export default ProductShow;
