import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("products")) || [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
    deleteProduct: (state, action) => {
      const filtered = state.basket.filter(
        (product) => product.id !== action.payload.id
      );
      state.basket = filtered;
    },
    editProduct: (state, action) => {
      const edited = state.basket.map((product) => {
        return product.id === action.payload
          ? { ...product, amount: product.amount + 1 }
          : product;
      });
      state.basket = edited;
    },
    increaseAmount: (state, action) => {
      const increased = state.basket.map((product) => {
        return product.id === action.payload
          ? { ...product, amount: product.amount + 1 }
          : product;
      });
      state.basket = increased;
    },
    decreaseAmount: (state, action) => {
      const decreased = state.basket.map((product) => {
        return product.id === action.payload
          ? { ...product, amount: product.amount - 1 }
          : product;
      });
      state.basket = decreased;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  editProduct,
  increaseAmount,
  decreaseAmount,
} = basketSlice.actions;
export default basketSlice.reducer;
