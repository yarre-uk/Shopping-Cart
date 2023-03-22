import { createSelector } from '@reduxjs/toolkit';

import { GOODS_SLICE_NAME, GoodsState } from './models';

type RootState = {
  [GOODS_SLICE_NAME]: GoodsState;
};

const CartSelector = (state: RootState): GoodsState => state[GOODS_SLICE_NAME];

export const selectGoods = createSelector(CartSelector, (state) => state);
