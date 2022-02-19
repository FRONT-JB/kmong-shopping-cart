import { useDispatch, useSelector } from 'react-redux';
import {
  cartProductsSelector,
  decrementQantity,
  filteredProductSelector,
  incrementQantity,
  paymentsRequest,
} from '../store/reducer/productReducer';
import { CartProducts } from '../types/product';

const useCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(filteredProductSelector);
  const cartProducts = useSelector(cartProductsSelector);

  const handleIncrement = (productId: number) => {
    dispatch(incrementQantity(productId));
  };

  const handleDecrement = (productId: number) => {
    dispatch(decrementQantity(productId));
  };

  const handlePayments = (products: CartProducts[]) => {
    dispatch(paymentsRequest(products));
  };

  return { products, cartProducts, handleIncrement, handleDecrement, handlePayments };
};

export default useCart;
