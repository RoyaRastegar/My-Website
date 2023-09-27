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
        { todoName: todo, complated: false, id: Date.now() },
      ]);
      setTodo("");
    }
  }
  return (
    <>
      <form className="add-form" onSubmit={handelAddTodo}>
        <h3>list of todo 😧 </h3>
        <input
          type="text"
          placeholder="Enter your work..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ListTodo todos={todos} />
    </>
  );
};

export default Form;
