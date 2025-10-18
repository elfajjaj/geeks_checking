import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  selectTasksByCategory,
  toggleTask,
} from "../redux/tasksSlice";

function TaskList({ categoryId }) {
  const dispatch = useDispatch();
  const allTasks = useSelector(selectTasks);
  const filteredTasks = useSelector(
    categoryId ? selectTasksByCategory(categoryId) : () => allTasks
  );

  const handleToggle = useCallback(
    (id) => dispatch(toggleTask(id)),
    [dispatch]
  );

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          style={{
            margin: "10px auto",
            width: "60%",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "6px",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.title}
          <button
            onClick={() => handleToggle(task.id)}
            style={{ marginLeft: "10px" }}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
