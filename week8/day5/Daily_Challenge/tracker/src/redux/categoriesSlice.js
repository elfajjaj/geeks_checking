import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, name: "Work" },
    { id: 2, name: "Study" },
    { id: 3, name: "Fitness" },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const cat = state.list.find((c) => c.id === id);
      if (cat) cat.name = name;
    },
    deleteCategory: (state, action) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
