import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1 >Home</h1>
      <Link to='/cddLeran'>
        <img
          className="w-50"
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
          alt="css imag"
        />
      </Link>
    </>
  );
};

export default Home;
