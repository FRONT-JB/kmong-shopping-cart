import styled from 'styled-components';
import { Card, Seo } from '../components';
import { Button } from '../styles/common/button';
import useCart from '../hooks/useCart';
import IconPackage from '../public/icon_package.svg';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { cartProductsPriceSelector } from '../store/reducer/productReducer';
import { numberWithComma } from '../utils/price';

const Index = () => {
  const { cartProducts, handleDecrement, handlePayments } = useCart();
  const { primeTotal, generalTotal, productTotal } = useSelector(cartProductsPriceSelector);
  const isNotNullCart = !!cartProducts.length;

  return (
    <CartWrapper>
      <Seo title='Cart' />
      {!isNotNullCart ? (
        <NoResult>
          <Image src={IconPackage} />
          <strong>장바구니가 비었습니다.</strong>
        </NoResult>
      ) : (
        <>
          <ProductCart>
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
          </ProductCart>
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
`;

const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 112px);
  *::selection {
    background: transparent;
  }
  strong {
    margin-top: 20px;
    cursor: default;
    color: ${({ theme }) => theme.color.black.base};
  }
`;

const ProductCart = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -24px 0 -24px;
`;

const Payment = styled.div`
  margin-top: 32px;
  text-align: right;
`;

const PaymentInfo = styled.div`
  display: inline-block;
  min-width: 250px;
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
