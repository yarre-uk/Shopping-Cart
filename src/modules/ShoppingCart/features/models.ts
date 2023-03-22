export interface CartItem {
  id: number;
  amount: number;
}

export const SHOPPING_CART_SLICE_NAME = 'shoppingCart';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};
