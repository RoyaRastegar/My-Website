import React from "react";
import { useState } from "react";
import "./Todo.css";
const Todo = () => {
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
  function deleteItem(id) {
    const newTodosAfterDlete = todos.filter((t) => t.id != id);
    setTodos(newTodosAfterDlete);
  }
  function checkedItem(index) {
    const updateTask = [...todos];
    updateTask[index].completed = !updateTask[index].completed;

    setTodos(updateTask);
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

      <div className="list">
        <ul>
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <span className={todo.completed ? "completed" : ""}>
                {todo.todoName}
              </span>

              <button onClick={() => deleteItem(todo.id)}>❌</button>
              <button onClick={() => checkedItem(index)}>✔ </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
