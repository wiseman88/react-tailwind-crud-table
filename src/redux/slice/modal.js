import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  productId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.showModal = true;
      state.productId = action.payload;
    },
    closeModal: (state, action) => {
      state.showModal = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
