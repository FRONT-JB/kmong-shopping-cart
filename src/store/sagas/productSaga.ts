import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  clearPayments,
  paymentsFailure,
  paymentsRequest,
  paymentsSuccess,
  productFailure,
  productRequest,
  productSuccess,
} from '../reducer/productReducer';
import { CartProducts } from '~/types/product';
import { BASE_URL } from '~/constants/api';

function paymentApi(data: CartProducts[]) {
  return axios.post(`${BASE_URL}/purchase`, data);
}

function productApi() {
  return axios.get(`${BASE_URL}/fruits`);
}

function* products() {
  try {
    const { data }: { data: CartProducts[] } = yield call(productApi);
    const products = data
      .map((product) => Object.assign(product, { quantity: 0 }))
      .sort((product) => (product.isPrime ? -1 : 1));
    yield put(productSuccess(products));
  } catch (error) {
    if (error instanceof Error) yield put(productFailure(error.message));
  }
}

function* payments({ payload }: PayloadAction<CartProducts[]>) {
  try {
    yield call(paymentApi, payload);
    yield put(paymentsSuccess());
    yield put(clearPayments());
    window.alert(JSON.stringify(payload));
  } catch (error) {
    if (error instanceof Error) yield put(paymentsFailure(error.message));
  }
}

export function* watchPayments() {
  yield takeLatest(paymentsRequest.type, payments);
}

export function* watchProducts() {
  yield takeLatest(productRequest.type, products);
}
