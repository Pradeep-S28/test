import React from "react";
import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  //function to add a new todo
  const addTodo = () => {
    if (todoInput !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), task: todoInput, isCompleted: false },
      ]);

      setTodoInput("");
    }
  };
  console.log(todos);

  //func to toggle
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="app-container">
      <div className="container">
        <h1 className="text-center text-danger">TO-DO APP</h1>

        {/* input group */}
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
          />
          <button className="btn btn-success" onClick={addTodo}>
            Add Todo
          </button>
        </div>

        {/* todo item component */}
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
  );
};

export default App;
