import { all, fork } from 'redux-saga/effects';
import { watchPayments, watchProducts } from './productSaga';

export default function* rootSaga() {
  yield all([fork(watchPayments), fork(watchProducts)]);
}
