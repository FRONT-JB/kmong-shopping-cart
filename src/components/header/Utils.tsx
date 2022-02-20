import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartQuantitySelector } from '~/store/reducer/productReducer';
import { ROUTE_PATH } from '~/route/path';

const Utils = () => {
  const { pathname } = useLocation();
  const isProduct = pathname === '/';
  const isCart = pathname === '/cart';
  const cartLength = useSelector(cartQuantitySelector);

  return (
    <UtilsWrapper>
      <Anchor href={ROUTE_PATH.ROOT} className={cn({ 'is-active': isProduct })}>
        상품목록
      </Anchor>
      <Anchor href={ROUTE_PATH.CART} className={cn({ 'is-active': isCart })}>
        <Tooltip className={cn({ 'is-active': cartLength > 0 })}>{cartLength}</Tooltip>
        장바구니
      </Anchor>
    </UtilsWrapper>
  );
};

export default Utils;

const UtilsWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (max-width: 1024px) {
    right: 32px;
  }
`;

const Anchor = styled.a`
  position: relative;
  display: inline-block;
  padding: 0 16px;
  height: 40px;
  border-radius: 8px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &::selection {
    background: transparent;
  }
  &:not(:first-child) {
    margin-left: 12px;
  }
  &.is-active {
    background: ${({ theme }) => theme.color.gray.lighten1};
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  position: absolute;
  right: -9.5px;
  top: -10px;
  display: block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: ${({ theme }) => theme.color.yellow};
  border-radius: 50%;
  opacity: 0;
  transition: all 0.2s ease;
  &.is-active {
    visibility: visible;
    opacity: 1;
  }
  &::selection {
    background: transparent;
  }
`;
