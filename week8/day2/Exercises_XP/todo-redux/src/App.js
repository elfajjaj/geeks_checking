import React from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Redux Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
