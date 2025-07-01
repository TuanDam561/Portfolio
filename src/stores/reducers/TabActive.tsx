import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  namePath: string;
}

const initialState: ModalState = {
  namePath: "Home", // 👈 khởi tạo rỗng hoặc giá trị mặc định
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
  },
});

export const { setNamePath, clearNamePath } = modalSlice.actions;
export default modalSlice.reducer;
