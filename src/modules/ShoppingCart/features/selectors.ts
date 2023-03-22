import { createSelector } from '@reduxjs/toolkit';

import { SHOPPING_CART_SLICE_NAME, CartState } from './models';

type RootState = {
  [SHOPPING_CART_SLICE_NAME]: CartState;
};

const CartSelector = (state: RootState): CartState =>
  state[SHOPPING_CART_SLICE_NAME];

export const selectCart = createSelector(CartSelector, (state) => state);
