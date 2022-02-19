import { all, fork } from 'redux-saga/effects';
import { watchPayments } from './productSaga';

export default function* rootSaga() {
  yield all([fork(watchPayments)]);
}
