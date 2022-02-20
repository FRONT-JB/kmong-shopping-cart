import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FILTER_METHOD } from '~/constants/filter';
import { FilterTypes } from '~/types/filter';
import { CartProducts, PaymentProduct } from '~/types/product';
import { calcTotalPrice } from '~/utils/totalPrice';
import { RootState } from '.';

export const PRODUCT_SLICE_NAME = 'product' as const;

interface ProductState {
  products: CartProducts[];
  filter: FilterTypes;
  error: string | null;
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  filter: 'all',
  error: null,
  loading: false,
};

const productSlice = createSlice({
  name: PRODUCT_SLICE_NAME,
  initialState,
  reducers: {
    setProduct: (state, { payload }: PayloadAction<CartProducts[]>) => {
      return {
        ...state,
        products: payload,
      };
    },
    changeFilter: (state, { payload }: PayloadAction<FilterTypes>) => {
      return {
        ...state,
        filter: payload,
      };
    },
    incrementQantity: (state, { payload: productId }: PayloadAction<number>) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity + 1 } : product,
        ),
      };
    },
    decrementQantity: (state, { payload: productId }: PayloadAction<number>) => {
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity - 1 } : product,
        ),
      };
    },
    clearPayments: (state) => {
      return {
        ...state,
        products: state.products.map((product) => ({ ...product, quantity: 0 })),
      };
    },

    // APIs
    productRequest: (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    productSuccess: (state, { payload }: PayloadAction<CartProducts[]>) => {
      return {
        ...state,
        products: payload,
        loading: false,
      };
    },
    productFailure: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },

    paymentsRequest: (state, { payload }: PayloadAction<PaymentProduct>) => {
      return {
        ...state,
        loading: true,
      };
    },
    paymentsSuccess: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    paymentsFailure: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
  },
});

export const { actions, reducer: productReducer } = productSlice;
export const {
  setProduct,
  changeFilter,
  incrementQantity,
  decrementQantity,
  clearPayments,
  paymentsRequest,
  paymentsSuccess,
  paymentsFailure,
  productRequest,
  productSuccess,
  productFailure,
} = actions;

export const productSelector = (state: RootState) => state.product;
export const filterStateSelector = createSelector([productSelector], ({ filter }) => filter);
export const fetchStateSelector = createSelector([productSelector], ({ loading, error }) => ({
  loading,
  error,
}));
export const filteredProductSelector = createSelector([productSelector], ({ products, filter }) => {
  if (filter === FILTER_METHOD.ALL) {
    return products;
  } else if (filter === FILTER_METHOD.PRIME) {
    return products.filter((product) => product.isPrime === true);
  } else if (filter === FILTER_METHOD.GENERAL) {
    return products.filter((product) => product.isPrime === false);
  }
});
export const cartQuantitySelector = createSelector([productSelector], ({ products }) => {
  const isSelected = products?.filter((product) => product?.quantity > 0);
  return isSelected.length;
});
export const cartProductsSelector = createSelector([productSelector], ({ products }) => {
  return products.filter((product) => product?.quantity > 0);
});
export const cartProductsPriceSelector = createSelector([productSelector], ({ products }) => {
  const primeTotal = calcTotalPrice(products, 'PRIME');
  const generalTotal = calcTotalPrice(products, 'GENERAL');
  const productTotal = primeTotal + generalTotal;
  return {
    primeTotal,
    generalTotal,
    productTotal,
  };
});

export default productReducer;
