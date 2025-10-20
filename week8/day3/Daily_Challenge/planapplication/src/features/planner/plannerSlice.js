import { createSlice } from "@reduxjs/toolkit";

const plannerSlice = createSlice({
  name: "planner",
  initialState: {
    selectedDay: new Date().toISOString().split("T")[0], 
    tasksByDay: {}, 
  },
  reducers: {
    selectDay: (state, action) => {
      state.selectedDay = action.payload;
    },
    addTask: (state, action) => {
      const day = state.selectedDay;
      const task = { id: Date.now(), text: action.payload };
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const day = state.selectedDay;
      const tasks = state.tasksByDay[day] || [];
      const task = tasks.find((t) => t.id === id);
      if (task) task.text = newText;
    },
    deleteTask: (state, action) => {
      const day = state.selectedDay;
      state.tasksByDay[day] = state.tasksByDay[day].filter(
        (t) => t.id !== action.payload
      );
    },
  },
});

export const { selectDay, addTask, editTask, deleteTask } =
  plannerSlice.actions;
export default plannerSlice.reducer;
