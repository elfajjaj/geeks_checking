import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, title: "Finish Redux homework", completed: false, categoryId: 1 },
    { id: 2, title: "Go to gym", completed: true, categoryId: 3 },
    { id: 3, title: "Study JavaScript", completed: false, categoryId: 2 },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.list.find((t) => t.id === id);
      if (task) task.title = title;
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const selectTasks = (state) => state.tasks.list;

export const selectTasksByCategory = (categoryId) =>
  createSelector([selectTasks], (tasks) =>
    tasks.filter((task) => task.categoryId === categoryId)
  );

export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((task) => task.completed).length
);

export const selectCategoryById = (state, id) =>
  state.categories.list.find((c) => c.id === id);

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
