import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
