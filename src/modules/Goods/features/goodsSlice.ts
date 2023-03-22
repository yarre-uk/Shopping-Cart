import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GOODS_SLICE_NAME, Good, initialState } from './models';

export const cartSlice = createSlice({
  name: GOODS_SLICE_NAME,
  initialState,
  reducers: {
    getGoodsFetch: (state) => {
      state.isLoading = true;
    },
    getGoodsSuccess: (state, { payload }: PayloadAction<Good[]>) => {
      state.goods = payload;
      state.isLoading = false;
    },
    getGoodsError: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getGoodsFetch, getGoodsSuccess, getGoodsError } =
  cartSlice.actions;

export default cartSlice.reducer;
