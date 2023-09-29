import React from "react";
import "../Todo.css";
const Item = ({ todo, onClick, onCheckedItem }) => {
  return (
    <>
      <li key={todo.id}>
        <input
          className="inputList"
          type="checkbox"
          value={todo.complated}
          onChange={() => onCheckedItem(todo.id)}
        />
        <span style={todo.complated ? { textDecoration: "line-through" } : {}}>
          {todo.todoName}
        </span>

        <button className="actions" onClick={() => onClick(todo.id)}>
          ❌
        </button>
      </li>
    </>
  );
};

export default Item;
