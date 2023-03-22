import { combineReducers } from '@reduxjs/toolkit';
import { SHOPPING_CART_SLICE_NAME } from '../modules/ShoppingCart/features/models';
import cartReduceer from '../modules/ShoppingCart/features/cartSlice';

export const rootReducer = combineReducers({
  [SHOPPING_CART_SLICE_NAME]: cartReduceer,
});
