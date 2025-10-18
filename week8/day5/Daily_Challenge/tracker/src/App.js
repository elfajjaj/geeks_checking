import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskList from "./components/TaskList";
import CategorySelector from "./components/CategorySelector";
import { selectCompletedTasks } from "./redux/tasksSlice";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const completedCount = useSelector(selectCompletedTasks);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>📅 Productivity Tracker</h1>
      <CategorySelector
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <p>✅ Completed tasks: {completedCount}</p>
      <TaskList categoryId={selectedCategory} />
    </div>
  );
}

export default App;
