import React from "react";
import "../Todo.css";
import Item from "../Item/Item";

const ListTodo = ({ todos, onClick, onCheckedItem, todoListsort }) => {
  return (
    <div className="list">
      <ul>
        {todoListsort.map((todo, index) => (
          <Item todo={todo} onClick={onClick} onCheckedItem={onCheckedItem} />
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
