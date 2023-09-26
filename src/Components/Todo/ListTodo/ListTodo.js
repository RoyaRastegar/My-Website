import React from "react";

const ListTodo = ({ todo }) => {
  return (
    <>
      <div className="list">
        <ul>
          {todo.map((todo) => (
            <div>
              <li>
                <button>❌</button>
                {todo.todoName}
                <input type="checkbox" className="inputList" />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListTodo;
