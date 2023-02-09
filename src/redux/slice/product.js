import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `https://63dcc719df83d549ce936b33.mockapi.io/products`;

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(API_URL);
  return response.json();
});

const initialState = {
  products: [],
  categories: ["Laptop", "PC", "Mobile", "Tablet"],
  colors: ["White", "Silver", "Black", "Brown"],
};

const productSlice = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
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

export const { addProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
