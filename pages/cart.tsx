import styled from 'styled-components';
import Card from '../components/Card';
import { Button } from '../components/common';

const Index = () => {
  return (
    <CartWrapper>
      <ProductCart>
        <Card title='바나나' icon={''} price={6000} stock={5} total={10} isCart>
          <Actions>
            <Button label='취소' color='gray' />
          </Actions>
        </Card>
      </ProductCart>
      <Payment>
        <PaymentInfo>
          <div className='price prime'>
            <strong>
              <i className='prime'>prime</i>
              과일
            </strong>
            <span>85000원</span>
          </div>
          <div className='price default'>
            <strong>일반 과일</strong>
            <span>8000원</span>
          </div>
          <div className='price total'>
            <strong>총 상품금액</strong>
            <span>93000원</span>
          </div>
          <Button label='결제하기' color='yellow' />
        </PaymentInfo>
      </Payment>
    </CartWrapper>
  );
};

export default Index;

const CartWrapper = styled.div`
  max-width: 880px;
  padding: 112px 0 0;
  margin: 0 auto;
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
