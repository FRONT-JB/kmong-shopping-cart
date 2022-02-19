import { configureStore, Reducer } from '@reduxjs/toolkit';
import { Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootReducer from './reducer';
import { RootState } from './reducer/index';
import rootSaga from './sagas';

interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer as Reducer<RootState>,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV === 'development',
  });
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(makeStore, {
  // debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
