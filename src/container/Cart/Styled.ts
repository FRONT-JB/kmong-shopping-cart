import styled from 'styled-components';
import { Button } from '~/assets/styles/common/button';

export const CartWrapper = styled.div`
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

export const Payment = styled.div`
  margin-top: 32px;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const PaymentInfo = styled.div`
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
