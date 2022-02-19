import { RootState } from './reducer/index';
import { configureStore, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducer';

export const makeStore = () =>
  configureStore({
    reducer: rootReducer as Reducer<RootState>,
  });

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
