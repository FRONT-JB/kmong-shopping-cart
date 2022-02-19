import { CartProducts } from '../types/product';
import { FILTER_METHOD } from '../constants/filter';

export const calcTotalPrice = (products: CartProducts[], filter: keyof typeof FILTER_METHOD) => {
  const isPrime = filter === 'PRIME';
  return products
    .filter((product) => (isPrime ? product.isPrime : !product.isPrime) && product.quantity > 0)
    .reduce((prev, curr) => prev + curr.quantity * curr.price, 0);
};
