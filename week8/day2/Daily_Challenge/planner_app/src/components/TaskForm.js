import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../redux/plannerActions";

const TaskForm = ({ editIndex, editValue, onDoneEditing }) => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDay);
  const [task, setTask] = useState(editValue || "");

  const handleSubmit = () => {
    if (editIndex !== null) {
      dispatch(editTask(selectedDay, editIndex, task));
      onDoneEditing();
    } else {
      dispatch(addTask(selectedDay, task));
    }
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskForm;
