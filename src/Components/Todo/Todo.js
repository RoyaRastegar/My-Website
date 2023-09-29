import React from "react";
import { useState } from "react";
import "./Todo.css";
import Form from "./Form/Form";
import ListTodo from "./ListTodo/ListTodo";
import Stats from "./Stats/Stats";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [sortby, setSortby] = useState("all");
  let todoListsort;
  if (sortby === "all") {
    todoListsort = todos;
  }
  if (sortby === "complated") {
    todoListsort = todos.filter((t) => t.complated);
  }
  if (sortby === "uncomplated") {
    todoListsort = todos.filter((t) => !t.complated);
  }
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
  function checkedItem(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, complated: !todo.complated } : todo
      )
    );
    // const updateTask = [...todos];
    // updateTask[index].completed = !updateTask[index].completed;

    // setTodos(updateTask);
  }

  return (
    <div className="app">
      <div className="heder">
        <h1> Todo</h1>
      </div>

      <Form
        todo={todo}
        settodo={setTodo}
        onClic={handelAddTodo}
        todos={todos}
        sortby={sortby}
        setSortby={setSortby}
      />
      <ListTodo
        todos={todos}
        onClick={deleteItem}
        onCheckedItem={checkedItem}
        todoListsort={todoListsort}
      />
      <Stats todos={todos} />
    </div>
  );
};

export default Todo;
