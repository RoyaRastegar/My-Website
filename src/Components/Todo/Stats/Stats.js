import React from "react";
import "../Todo.css";
const Stats = ({ todos }) => {
  const items = todos.length;
  const numItem = todos.filter((t) => t.complated).length;
  const avg = Math.round((numItem / items) * 100);
  return (
    <div className="stats">
      <em>
        You have {items} on your list for doing,and you already do {numItem}(
        {avg}%)
      </em>
    </div>
  );
};

export default Stats;
