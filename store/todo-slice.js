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
    addTodo: (state, action) => {
      state.activeTodos.push({
        id: Date.now(),
        taskName: action.payload.taskName,
      });
    },
    addActiveTodo: (state, action) => {
      state.activeTodos.push(action.payload.todo);
    },
    addCompletedTodo: (state, action) => {
      state.completedTodos.push(action.payload.todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setActiveTodos: (state, action) => {
      state.activeTodos = action.payload.activeTodos;
    },
    setCompletedTodos: (state, action) => {
      state.activeTodos = action.payload.activeTodos;
    },
    delActiveTodos: (state, action) => {
      state.activeTodos = state.activeTodos.filter((todos) => {
        return todos.id !== action.payload.id;
      });
    },
    delCompletedTodos: (state, action) => {
      state.completedTodos = state.completedTodos.filter((todos) => {
        return todos.id !== action.payload.id;
      });
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
