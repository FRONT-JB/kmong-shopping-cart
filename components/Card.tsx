import styled from 'styled-components';
import Emoji from './common/Emoji';
import { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  title: string;
  icon: string;
  price: number;
  stock: number;
  total?: number;
  isPrime?: boolean;
  isCart?: boolean;
  children?: ReactNode;
}

const Card = ({
  title,
  icon,
  price,
  stock,
  total,
  isPrime = false,
  isCart = false,
  children = null,
}: Props) => {
  return (
    <CardWrapper className={classNames({ 'is-cart': isCart })}>
      {isPrime && <i className='is-prime'>prime</i>}
      <Emoji icon={icon} />
      <Desc>
        <DescInfo>
          <Title>{title}</Title>
          <Price>{price}원</Price>
          {!isCart && (
            <div className='items stock'>
              <em>잔량</em>
              <span>{stock}</span>
            </div>
          )}
          <div className='items amount'>
            <em>수량</em>
            <span>{stock}</span>
          </div>
          {isCart && (
            <div className='items total'>
              <em>상품금액</em>
              <span>{total}원</span>
            </div>
          )}
        </DescInfo>
        {children}
      </Desc>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 32px 16px 16px 16px;
  margin: 24px;
  width: calc((100% / 3) - 48px);
  min-height: 240px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  &.is-cart {
    width: calc((100% / 2) - 48px);
  }
  .is-prime {
    position: absolute;
    top: 12px;
    left: 16px;
    color: ${({ theme }) => theme.color.orange};
    font-size: 20px;
    font-weight: 700;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`;

const DescInfo = styled.div`
  .items {
    &.stock,
    &.amount,
    &.total {
      display: flex;
      margin-top: 8px;
      cursor: default;

      em,
      span {
        font-style: normal;
        display: inline-block;
        font-size: 16px;
      }
      em {
        width: 30px;
        flex: 0 0 auto;
        font-weight: 400;
        color: ${({ theme }) => theme.color.black.lighten1};
      }
      span {
        flex: 1 1 auto;
        margin-left: 8px;
        font-weight: 700;
      }
    }

    &.total {
      margin-top: 12px;
      margin-right: 30px;
      padding-top: 12px;
      border-top: ${({ theme }) => `1px solid ${theme.color.gray.base}`};
      strong {
        width: auto;
      }
    }

    &:nth-of-type(1) {
      margin-top: 16px;
    }
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 20px;
`;

const Price = styled.span`
  display: block;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 700;
`;
