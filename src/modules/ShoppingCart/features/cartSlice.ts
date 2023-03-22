import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CartItem, SHOPPING_CART_SLICE_NAME, initialState } from './models';

export const cartSlice = createSlice({
  name: SHOPPING_CART_SLICE_NAME,
  initialState,
  reducers: {
    addItem: (
      state,
      { payload }: PayloadAction<{ id: number; amount: number }>,
    ) => {
      const good = state.items.find((good) => good.id === payload.id);

      if (good) {
        good.amount += payload.amount;
        return;
      }

      state.items.push(payload);
    },
    updateItem: (state, { payload }: PayloadAction<CartItem>) => {
      const good = state.items.find((good) => good.id === payload.id);

      if (good) {
        good.amount = payload.amount;
        return;
      }

      throw new Error('Invalid good');
    },
    removeItem: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((good) => good.id !== payload);
    },
  },
});

export const { addItem, updateItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
