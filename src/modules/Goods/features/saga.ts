import { call, put, takeEvery } from 'redux-saga/effects';
import { getGoodsFetch, getGoodsSuccess } from './goodsSlice';
import { Good } from './models';
import { FetchGoods } from './mock';

function* getGoodsSaga() {
  const data: Good[] = yield call(FetchGoods);
  yield put(getGoodsSuccess(data));
}

export function* watcherGetGoodsSaga() {
  yield takeEvery(getGoodsFetch.type, getGoodsSaga);
}
