import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpenModalSetting: boolean;
  isOnMusic: boolean;
}

const initialState: ModalState = {
  isOpenModalSetting: false,
  isOnMusic: true,
};

const modalSlice = createSlice({
  name: "modalAct",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpenModalSetting = true;
    },
    closeModal: (state) => {
      state.isOpenModalSetting = false;
    },
    toggleModal: (state) => {
      state.isOpenModalSetting = !state.isOpenModalSetting;
    },
    turnOffMusic: (state) => {
      state.isOnMusic = !state.isOnMusic;
    },
  },
});

export const { openModal, closeModal, toggleModal, turnOffMusic } =
  modalSlice.actions;
export default modalSlice.reducer;
export type { ModalState };
