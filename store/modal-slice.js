import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  taskName: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleOpenModal: (state) => {
      state.isModalOpen = true;
    },
    handleCloseModal: (state) => {
      state.isModalOpen = false;
      state.taskName = "";
    },
    setTaskName: (state, action) => {
      state.taskName = action.payload.taskName;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
