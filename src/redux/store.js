import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/product";
import modalReducer from "./slice/modal";
export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
  },
});
