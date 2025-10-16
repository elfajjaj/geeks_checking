export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SELECT_DAY = "SELECT_DAY";

export const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

export const editTask = (day, taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { day, taskId, updatedTask },
});

export const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});

export const selectDay = (day) => ({
  type: SELECT_DAY,
  payload: day,
});
