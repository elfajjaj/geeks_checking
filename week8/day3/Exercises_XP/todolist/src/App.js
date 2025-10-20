import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>📝 React Redux Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
