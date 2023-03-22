import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CartGood, SHOPPING_CART_SLICE_NAME, initialState } from './models';

export const cartSlice = createSlice({
  name: SHOPPING_CART_SLICE_NAME,
  initialState,
  reducers: {
    addGood: (state, { payload }: PayloadAction<CartGood>) => {
      const good = state.goods.find((good) => good.id === payload.id);

      if (good) {
        good.amount += payload.amount;
        return;
      }

      state.goods.push(payload);
    },
    updateGood: (state, { payload }: PayloadAction<CartGood>) => {
      const good = state.goods.find((good) => good.id === payload.id);

      if (good) {
        good.amount = payload.amount;
        return;
      }

      throw new Error('Invalid good');
    },
    removeGood: (state, { payload }: PayloadAction<number>) => {
      state.goods.filter((good) => good.id === payload);
    },
  },
});

export const { addGood } = cartSlice.actions;

export default cartSlice.reducer;
