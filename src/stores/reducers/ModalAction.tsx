import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  isOnMusic: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isOnMusic: true,
};

const modalSlice = createSlice({
  name: "modalAct",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    turnOffMusic: (state) => {
      state.isOnMusic = !state.isOnMusic;
    },
  },
});

export const { openModal, closeModal, toggleModal, turnOffMusic } =
  modalSlice.actions;
export default modalSlice.reducer;
