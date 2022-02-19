import { PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants/api';
import { CartProducts } from '../../types/product';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  clearPayments,
  paymentsFailure,
  paymentsRequest,
  paymentsSuccess,
} from '../reducer/productReducer';

function paymentApi(data: CartProducts[]) {
  return axios.post(`${BASE_URL}/purchase`, data);
}

function* payments({ payload }: PayloadAction<CartProducts[]>) {
  try {
    yield call(paymentApi, payload);
    yield put(paymentsSuccess());
    yield put(clearPayments());
  } catch (error) {
    if (error instanceof Error) yield put(paymentsFailure(error.message));
  }
}

export function* watchPayments() {
  yield takeLatest(paymentsRequest.type, payments);
}
