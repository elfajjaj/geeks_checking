import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/plannerActions";

const TaskList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const { selectedDay, tasksByDay } = useSelector((state) => state);
  const tasks = tasksByDay[selectedDay] || [];

  return (
    <div>
      <h3>Tasks for {selectedDay}</h3>
      {tasks.length === 0 ? (
        <p>No tasks for this day.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => onEdit(index, task)}>✏️</button>
              <button onClick={() => dispatch(deleteTask(selectedDay, index))}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
