import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductList } from '~/assets/styles/layout/Product';
import { Card, Filter, Result } from '~/components';
import { NOT_FOUND_MESSAGE } from '~/constants/notfound';
import useCart from '~/hooks/useCart';
import { productRequest, setProduct } from '~/store/reducer/productReducer';
import { HomeWrapper } from './Styled';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { products, handleIncrement, handleDecrement } = useCart();
  const isNotNullCart = !!products?.length;

  useEffect(() => {
    if (!isNotNullCart) {
      dispatch(productRequest());
    }
  }, []);

  return (
    <HomeWrapper className={cn({ empty: !isNotNullCart })}>
      {!isNotNullCart ? (
        <Result title={NOT_FOUND_MESSAGE.PRODUCT} />
      ) : (
        <>
          <Filter />
          <ProductList>
            {products?.map((product) => (
              <Card
                key={`${product.name}-${product.id}`}
                product={product}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
          </ProductList>
        </>
      )}
    </HomeWrapper>
  );
};

export default MainContainer;
