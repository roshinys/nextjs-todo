import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTodos: [],
  completedTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.activeTodos = action.payload.activeTodos;
      state.completedTodos = action.payload.completedTodos;
    },
    addActiveTodo: (state, action) => {
      state.activeTodos.push({ ...action.payload.todo, status: "Active" });
    },
    addCompletedTodo: (state, action) => {
      state.completedTodos.push({
        ...action.payload.todo,
        status: "Completed",
      });
    },
    setActiveTodos: (state, action) => {
      state.activeTodos = action.payload.activeTodos;
    },
    setCompletedTodos: (state, action) => {
      state.activeTodos = action.payload.activeTodos;
    },
    delActiveTodos: (state, action) => {
      state.activeTodos = state.activeTodos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    delCompletedTodos: (state, action) => {
      state.completedTodos = state.completedTodos.filter((todos) => {
        return todos._id !== action.payload._id;
      });
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
