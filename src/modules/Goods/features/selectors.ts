import { createSelector } from '@reduxjs/toolkit';

import { GOODS_SLICE_NAME, GoodsState } from './models';

type RootState = {
  [GOODS_SLICE_NAME]: GoodsState;
};

const CartSelector = (state: RootState): GoodsState => state[GOODS_SLICE_NAME];

export const selectGoods = createSelector(CartSelector, (state) => state);

const selectItemId = (state: RootState, itemId: number) => itemId;

export const selectGoodId = createSelector(
  [CartSelector, selectItemId],
  (items, itemId) => items.goods.find((item) => item.id == itemId),
);
