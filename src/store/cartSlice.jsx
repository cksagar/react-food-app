import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If item exists, update quantity
        existingItem.quantity += 1;
      } else {
        // If new, add with quantity 1
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); // Remove if quantity is 0
    },
    clearCart: (state) => {
      state.cartItems = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
