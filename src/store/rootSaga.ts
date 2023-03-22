import { all } from 'redux-saga/effects';
import { watcherGetGoodsSaga } from '../modules/Goods/features/saga';

export default function* rootSaga() {
  yield all([watcherGetGoodsSaga()]);
}
