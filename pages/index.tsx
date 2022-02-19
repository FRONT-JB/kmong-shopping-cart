import cls from 'classnames';
import styled from 'styled-components';
import axios from 'axios';
import { Card, Filter, Result, Seo } from '../components';
import { BASE_URL } from '../constants/api';
import useCart from '../hooks/useCart';
import wrapper from '../store';
import { setProduct } from '../store/reducer/productReducer';
import { Button } from '../styles/common/button';
import { CartProducts } from '../types/product';
import { NOT_FOUND_MESSAGE } from '../constants/notfound';
import { ProductList } from '../styles/layout/Product';

const Home = () => {
  const { products, handleIncrement, handleDecrement } = useCart();
  const isNotNullCart = !!products?.length;
  return (
    <HomeWrapper>
      <Seo title='Products' />
      {!isNotNullCart ? (
        <Result title={NOT_FOUND_MESSAGE.PRODUCT} />
      ) : (
        <>
          <Filter />
          <ProductList>
            {products?.map((product) => (
              <Card key={`${product.name}-${product.id}`} product={product}>
                <Actions>
                  {product.quantity > 0 && (
                    <ActionButton
                      type='button'
                      className={cls('gray')}
                      onClick={() => handleDecrement(product.id)}
                    >
                      빼기
                    </ActionButton>
                  )}
                  <ActionButton
                    type='button'
                    className={cls({ orange: product.isPrime, yellow: !product.isPrime })}
                    onClick={() => handleIncrement(product.id)}
                    disabled={product.stock === product.quantity}
                  >
                    담기
                  </ActionButton>
                </Actions>
              </Card>
            ))}
          </ProductList>
        </>
      )}
    </HomeWrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { data }: { data: CartProducts[] } = await axios.get(`${BASE_URL}/fruits`);
  const products = data
    .map((product) => Object.assign(product, { quantity: 0 }))
    .sort((product) => (product.isPrime ? -1 : 1));
  store.dispatch(setProduct(products));
  return { props: {} };
});

export default Home;

const HomeWrapper = styled.div`
  max-width: 1440px;
  padding: 96px 0;
  margin: 0 auto;

  @media screen and (max-width: 1520px) {
    padding: 96px 15px;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  width: 100%;
  button:not(:first-child) {
    margin-left: 16px;
  }
`;

const ActionButton = styled(Button)``;
