export interface Good {
  id: number;
  name: string;
  price: number;
}

export const GOODS_SLICE_NAME = 'goods';

export interface GoodsState {
  isLoading: boolean;
  goods: Good[];
}

export const initialState: GoodsState = {
  isLoading: false,
  goods: [],
};
