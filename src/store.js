import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
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
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
