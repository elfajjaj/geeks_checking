import { ADD_TASK, EDIT_TASK, DELETE_TASK, SELECT_DAY } from "./plannerActions";

const initialState = {
  selectedDay: new Date().toISOString().split("T")[0],
  tasksByDay: {}, 
};

const plannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DAY:
      return { ...state, selectedDay: action.payload };

    case ADD_TASK: {
      const { day, task } = action.payload;
      const tasks = state.tasksByDay[day] || [];
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: [...tasks, task] },
      };
    }

    case EDIT_TASK: {
      const { day, taskId, updatedTask } = action.payload;
      const updatedTasks = state.tasksByDay[day].map((t, i) =>
        i === taskId ? updatedTask : t
      );
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: updatedTasks },
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      const remainingTasks = state.tasksByDay[day].filter(
        (_, i) => i !== taskId
      );
      return {
        ...state,
        tasksByDay: { ...state.tasksByDay, [day]: remainingTasks },
      };
    }

    default:
      return state;
  }
};

export default plannerReducer;
