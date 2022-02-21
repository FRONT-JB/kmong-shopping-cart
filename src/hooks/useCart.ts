import { fetchStateSelector } from './../store/reducer/productReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartProductsSelector,
  decrementQantity,
  filteredProductSelector,
  incrementQantity,
  paymentsRequest,
} from '~/store/reducer/productReducer';
import { CartProducts } from '~/types/product';
import { useCallback } from 'react';

const useCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(filteredProductSelector);
  const cartProducts = useSelector(cartProductsSelector);
  const { loading, error } = useSelector(fetchStateSelector);

  const handleIncrement = useCallback(
    (productId: number) => {
      dispatch(incrementQantity(productId));
    },
    [dispatch],
  );

  const handleDecrement = useCallback(
    (productId: number) => {
      dispatch(decrementQantity(productId));
    },
    [dispatch],
  );

  const handlePayments = useCallback(
    (products: CartProducts[]) => {
      const paymentParams = products.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));
      dispatch(paymentsRequest(paymentParams));
    },
    [dispatch],
  );

  return {
    products,
    loading,
    error,
    cartProducts,
    handleIncrement,
    handleDecrement,
    handlePayments,
  };
};

export default useCart;
