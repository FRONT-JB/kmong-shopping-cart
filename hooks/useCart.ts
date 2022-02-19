import { useDispatch, useSelector } from 'react-redux';
import {
  cartProductsSelector,
  decrementQantity,
  filteredProductSelector,
  incrementQantity,
} from '../store/reducer/productReducer';

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

  return { products, cartProducts, handleIncrement, handleDecrement };
};

export default useCart;
