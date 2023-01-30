import { configureStore, createSlice } from "@reduxjs/toolkit";

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

export const { addProduct, deleteProduct } = productsSlice.actions;
export const store = configureStore({
  reducer: {
    data: productsSlice.reducer,
  },
});
