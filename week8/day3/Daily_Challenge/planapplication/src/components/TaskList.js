import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const { selectedDay, tasksByDay } = useSelector((state) => state.planner);
  const tasks = tasksByDay[selectedDay] || [];

  return (
    <div>
      <h3>Tasks for {selectedDay}</h3>
      {tasks.length === 0 ? (
        <p>No tasks for this day yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t) => (
            <TaskItem key={t.id} task={t} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
