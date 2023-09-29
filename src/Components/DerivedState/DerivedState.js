import React from "react";
import { useState } from "react";

const DerivedState = () => {
  const [student, setSteudent] = useState([
    { name: "roya", age: 33 },
    { name: "saber", age: 34 },
    { name: "arad", age: 5 },
  ]);
  function countStudent() {
    const studentNum = student.length;
    const avg = student.reduce((rez, s) => rez + s.age / studentNum, 0);
    console.log({ studentNum, avg });
  }

  return (
    <>
      {student.map((s) => (
        <li>{s.name}</li>
      ))}
      <button onClick={countStudent}>count student</button>
    </>
  );
};

export default DerivedState;
