import React from "react";

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <div className="todo-item d-flex gap-2">
      <input
        type="checkbox"
        className="form-check-input"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      <span className={todo.isCompleted ? "text-decoration-line-through" : ""}>
        {todo.task}
      </span>
    </div>
  );
};

export default TodoItem;
