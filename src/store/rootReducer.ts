import { combineReducers } from '@reduxjs/toolkit';
import { SHOPPING_CART_SLICE_NAME } from '../modules/ShoppingCart/features/models';
import cartReduceer from '../modules/ShoppingCart/features/cartSlice';
import { GOODS_SLICE_NAME } from '../modules/Goods/features/models';
import goodsReducer from '../modules/Goods/features/goodsSlice';

export const rootReducer = combineReducers({
  [SHOPPING_CART_SLICE_NAME]: cartReduceer,
  [GOODS_SLICE_NAME]: goodsReducer,
});
