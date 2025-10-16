import React, { useState } from "react";
import CalendarPicker from "./components/CalendarPicker";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./styles.css";

const App = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleDoneEditing = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="app">
      <h1>🗓️ Daily Planner</h1>
      <CalendarPicker />
      <TaskForm
        editIndex={editIndex}
        editValue={editValue}
        onDoneEditing={handleDoneEditing}
      />
      <TaskList onEdit={handleEdit} />
    </div>
  );
};

export default App;
