import {
  decrement,
  incrementFetch,
  incrementSucces,
} from '../modules/ShoppingCart/features/cartSlice';
import { all, call, put, takeEvery } from 'redux-saga/effects';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementSaga() {
  yield call(delay, 1000);
  yield put(incrementSucces());
}

function* decrementSaga() {
  yield put(decrement());
}

function* watcherIncrementSaga() {
  yield takeEvery(incrementFetch().type, incrementSaga);
}

function* watcherDecrementSaga() {
  yield takeEvery(decrement().type, decrementSaga);
}

export default function* rootSaga() {
  yield all([watcherIncrementSaga(), watcherDecrementSaga()]);
}
