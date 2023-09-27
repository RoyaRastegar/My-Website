import React from "react";

const ListTodo = ({ todos }) => {
  function deleteItem(id) {
    const newTodosAfterDlete = todos.filter((t) => t.id != id);
  }
  return (
    <>
      <div className="list">
        <ul>
          {todos.map((todo) => (
            <div key={todo.id}>
              <li>
                <span
                  style={
                    todo.complated ? { textDecoration: "line-through" } : {}
                  }
                >
                  {todo.todoName}
                </span>
                <button onClick={() => deleteItem(todo.id)}>❌</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListTodo;
