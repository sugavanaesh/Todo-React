import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setvalue("");
  };
  return (
    <form className="TodoForm" onSubmit={HandleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter the task"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
