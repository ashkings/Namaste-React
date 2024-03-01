import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const isItem = state.items.findIndex(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
      if (isItem > -1) {
        state.items[isItem].quantity = state.items[isItem].quantity + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const isItem = state.items.findIndex(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );
      if (isItem > -1) {
        if (state.items[isItem].quantity === 1) {
          state.items.splice(isItem, 1);
        } else {
          state.items[isItem].quantity = state.items[isItem].quantity - 1;
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
