import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `https://63dcc719df83d549ce936b33.mockapi.io/products`;

const initialState = {
  products: [
    {
      name: 'Apple MacBook Pro 12"',
      color: "White",
      category: "Laptop",
      price: "1599",
    },
    {
      name: 'Apple MacBook Pro 14"',
      color: "Silver",
      category: "Laptop",
      price: "2999",
    },
  ],
  categories: ["Laptop", "PC", "Mobile", "Tablet"],
  colors: ["White", "Silver", "Black", "Brown"],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item.name === action.payload),
        1
      );
    },
  },
});

export const addProductAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, data);

    dispatch(addProduct(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addProduct, deleteProduct } = productsSlice.actions;
export const store = configureStore({
  reducer: {
    data: productsSlice.reducer,
  },
});
