import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = `https://63dcc719df83d549ce936b33.mockapi.io/products`;

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(API_URL);
  return response.json();
});

export const addProduct = createAsyncThunk("addProduct", async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
});

export const deleteProduct = createAsyncThunk("deleteProduct", async (data) => {
  try {
    const response = await fetch(`${API_URL}/${data}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  products: [],
  categories: ["Laptop", "PC", "Mobile", "Tablet"],
  colors: ["White", "Silver", "Black", "Brown"],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const { id } = action.payload;
      const products = state.products.filter((product) => product.id !== id);
      state.products = products;
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

export default productSlice.reducer;
