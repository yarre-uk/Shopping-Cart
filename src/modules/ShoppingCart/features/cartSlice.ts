import { createSlice } from '@reduxjs/toolkit';

import { SHOPPING_CART_SLICE_NAME, initialState } from './models';

export const cartSlice = createSlice({
  name: SHOPPING_CART_SLICE_NAME,
  initialState,
  reducers: {
    incrementFetch: (state) => {
      state.isLoading = true;
    },
    incrementSucces: (state) => {
      state.isLoading = false;
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { incrementFetch, incrementSucces, decrement } = cartSlice.actions;

export default cartSlice.reducer;
