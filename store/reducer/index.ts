import { combineReducers, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import productReducer from './productReducer';

const combineReducer = combineReducers({
  product: productReducer,
});

const rootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof combineReducer>;
