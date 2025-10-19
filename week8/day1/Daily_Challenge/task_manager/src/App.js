import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>🧠 Task Manager</h1>
        <TaskInput />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
