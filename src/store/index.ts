import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { Task } from 'redux-saga';
import rootReducer from './reducer';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};
const sagaMiddleware = createSagaMiddleware();
const enhancedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: enhancedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
  devTools: true,
});
sagaMiddleware.run(rootSaga);
export default store;
