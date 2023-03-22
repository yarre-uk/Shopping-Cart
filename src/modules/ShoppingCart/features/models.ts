export interface Good {
  name: string;
  price: number;
}

export const SHOPPING_CART_SLICE_NAME = 'shoppingCart';

export interface CartState {
  isLoading: boolean;
  goods: Good[];
  count: number;
}

export const initialState: CartState = {
  isLoading: false,
  goods: [],
  count: 0,
};
