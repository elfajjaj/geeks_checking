import React, { createContext, useReducer } from "react";

// إنشاء الـ Context
export const TaskContext = createContext();

// الحالة الابتدائية
const initialState = {
  tasks: [],
};

// الـ Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, tasks: [...state.tasks, newTask] };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

// الـ Provider
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
