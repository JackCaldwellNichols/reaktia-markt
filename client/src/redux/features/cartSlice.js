import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const newProductList = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = newProductList;
      state.quantity = state.quantity - 1;
      state.total =
        state.total - action.payload.price * action.payload.quantity;
    },
    cleanCart: (state) => {
      (state.quantity = 0), (state.products = []), (state.total = 0);
    },
  },
});

export const { addProduct, cleanCart, removeProduct } = cartSlice.actions;
