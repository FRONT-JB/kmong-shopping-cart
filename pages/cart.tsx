import { useSelector } from 'react-redux';
import styled from 'styled-components';
import cls from 'classnames';
import { Card, Result, Seo } from '../components';
import { Button } from '../styles/common/button';
import useCart from '../hooks/useCart';
import { cartProductsPriceSelector } from '../store/reducer/productReducer';
import { numberWithComma } from '../utils/price';
import { NOT_FOUND_MESSAGE } from '../constants/notfound';
import { ProductList } from '../styles/layout/Product';

const Index = () => {
  const { cartProducts, handleDecrement, handlePayments } = useCart();
  const { primeTotal, generalTotal, productTotal } = useSelector(cartProductsPriceSelector);
  const isNotNullCart = !!cartProducts.length;

  return (
    <CartWrapper className={cls({ 'is-small': cartProducts.length <= 2 })}>
      <Seo title='Cart' />
      {!isNotNullCart ? (
        <Result title={NOT_FOUND_MESSAGE.CART} />
      ) : (
        <>
          <ProductList>
            {cartProducts.map((product) => (
              <Card key={product.id} product={product} isCart>
                <Actions>
                  <ActionButton
                    type='button'
                    className='gray'
                    onClick={() => handleDecrement(product.id)}
                  >
                    취소
                  </ActionButton>
                </Actions>
              </Card>
            ))}
          </ProductList>
          <Payment>
            <PaymentInfo>
              <div className='price prime'>
                <strong>
                  <i className='prime'>prime</i>
                  과일
                </strong>
                <span>{numberWithComma(primeTotal)}원</span>
              </div>
              <div className='price default'>
                <strong>일반 과일</strong>
                <span>{numberWithComma(generalTotal)}원</span>
              </div>
              <div className='price total'>
                <strong>총 상품금액</strong>
                <span>{numberWithComma(productTotal)}원</span>
              </div>
              <ActionButton
                type='button'
                className='yellow'
                onClick={() => handlePayments(cartProducts)}
              >
                결제하기
              </ActionButton>
            </PaymentInfo>
          </Payment>
        </>
      )}
    </CartWrapper>
  );
};

export default Index;

const CartWrapper = styled.div`
  max-width: 880px;
  padding: 112px 0 0;
  margin: 0 auto;
  &.is-small {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 1520px) {
    padding: 112px 15px;
  }
`;

const Payment = styled.div`
  margin-top: 32px;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const PaymentInfo = styled.div`
  display: inline-block;
  min-width: 250px;
  text-align: right;
  .price {
    * {
      vertical-align: middle;
      cursor: default;
    }
    strong,
    span {
      color: ${({ theme }) => theme.color.black.base};
    }
    strong {
      font-size: 16px;
      .prime {
        margin-right: 4px;
        vertical-align: top;
        color: ${({ theme }) => theme.color.orange};
      }
    }
    span {
      display: inline-block;
      margin-left: 10px;
      min-width: 140px;
      font-size: 20px;
      font-weight: 700;
    }
    &.total {
      margin-top: 16px;
      padding-top: 12px;
      border-top: ${({ theme }) => `1px solid ${theme.color.gray.base}`};
      strong {
        font-size: 20px;
      }
      span {
        font-size: 32px;
        color: ${({ theme }) => theme.color.blue};
      }
    }
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
  button {
    margin-top: 48px;
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
