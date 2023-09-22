import React, { useState, useEffect } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      {" "}
      <h5>Time : {time} </h5>
    </div>
  );
};

export default Home;
