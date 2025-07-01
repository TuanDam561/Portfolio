import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  namePath: string;
  nameTab: string;
}

const initialState: ModalState = {
  namePath: "Home",
  nameTab: "developer",
};

const modalSlice = createSlice({
  name: "TabActive",
  initialState,
  reducers: {
    setNamePath: (state, action: PayloadAction<string>) => {
      state.namePath = action.payload;
    },
    clearNamePath: (state) => {
      state.namePath = "";
    },
    setNameTab: (state, action: PayloadAction<string>) => {
      state.nameTab = action.payload;
    },
  },
});

export const { setNamePath, clearNamePath, setNameTab } = modalSlice.actions;
export default modalSlice.reducer;
