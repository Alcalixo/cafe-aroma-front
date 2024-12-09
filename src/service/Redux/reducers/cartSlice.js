import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
  },
});
export const { addCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice;
