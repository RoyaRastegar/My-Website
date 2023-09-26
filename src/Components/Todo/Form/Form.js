import React, { useState } from "react";
import "../Todo.css";
import ListTodo from "../ListTodo/ListTodo";
const Form = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handelAddTodo(e) {
    e.preventDefault();
    if (todo.trim() !== "") {
      setTodos([
        ...todos,
        { todoName: todo, complated: false, id: Math.random() * 1000 },
      ]);
      setTodo("");
    }
  }
  return (
    <>
      <form className="add-form">
        <h3>list of todo 😧 </h3>
        <input
          type="text"
          placeholder="Enter your work..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handelAddTodo}>Add</button>
      </form>
      <ListTodo todo={todos} />
    </>
  );
};

export default Form;
