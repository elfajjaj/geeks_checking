import React, { createContext, useReducer, useRef } from "react";

export const TaskContext = createContext();

const initialState = {
  tasks: [],
  filter: "all", 
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, text: action.payload.text } : t
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case "FILTER_TASKS":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();

  return (
    <TaskContext.Provider value={{ state, dispatch, inputRef }}>
      {children}
    </TaskContext.Provider>
  );
}
