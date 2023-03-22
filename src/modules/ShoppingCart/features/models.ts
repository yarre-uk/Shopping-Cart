export interface CartGood {
  id: number;
  amount: number;
}

export const SHOPPING_CART_SLICE_NAME = 'shoppingCart';

export interface CartState {
  isLoading: boolean;
  goods: CartGood[];
}

export const initialState: CartState = {
  isLoading: false,
  goods: [],
};
