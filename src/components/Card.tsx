import { memo, ReactNode } from 'react';
import styled from 'styled-components';
import Emoji from './common/Emoji';
import cn from 'classnames';
import { ActionButton, Actions } from '~/assets/styles/common/actions';
import { CartProducts } from '~/types/product';
import { numberWithComma } from '~/utils/price';

interface Props {
  product: CartProducts;
  isCart?: boolean;
  children?: ReactNode;
  onIncrement?: (productId: number) => void;
  onDecrement: (productId: number) => void;
}

const Card = ({ product, isCart = false, onIncrement, onDecrement }: Props) => {
  const { id, name, image, stock, price, isPrime = false, quantity } = product;
  return (
    <CardWrapper className={cn({ 'is-cart': isCart })}>
      {isPrime && <i className='is-prime'>prime</i>}
      <Emoji icon={image} />
      <Desc>
        <DescInfo>
          <Title>{name}</Title>
          <Price>{numberWithComma(price)}원</Price>
          {!isCart && (
            <div className='items stock'>
              <em>잔량</em>
              <span>{stock - quantity}</span>
            </div>
          )}
          {quantity > 0 && (
            <div className='items amount'>
              <em>수량</em>
              <span>{quantity}</span>
            </div>
          )}
          {isCart && (
            <div className='items total'>
              <em>상품금액</em>
              <span>{numberWithComma(quantity * price)}원</span>
            </div>
          )}
        </DescInfo>
        <Actions>
          {quantity > 0 && (
            <ActionButton type='button' className={cn('gray')} onClick={() => onDecrement(id)}>
              {isCart ? '취소' : '빼기'}
            </ActionButton>
          )}
          {!isCart && (
            <ActionButton
              type='button'
              className={cn({ orange: isPrime, yellow: !isPrime })}
              onClick={() => onIncrement && onIncrement(id)}
              disabled={stock === quantity}
            >
              담기
            </ActionButton>
          )}
        </Actions>
      </Desc>
    </CardWrapper>
  );
};

export default memo(Card);

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 32px 16px 16px 16px;
  margin: 24px;
  width: calc((100% / 3) - 48px);
  min-height: 240px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 16px;
  align-items: center;
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
  @media screen and (max-width: 1024px) {
    width: calc(100% / 2 - 48px);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 12px;
    &.is-cart {
      width: 100%;
      margin: 12px;
    }
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
      em {
        display: inline-block;
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
