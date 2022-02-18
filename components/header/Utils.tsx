import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Utils = () => {
  const router = useRouter();
  const isProduct = router.pathname === '/';
  const isCart = router.pathname === '/cart';

  return (
    <UtilsWrapper>
      <Link href='/'>
        <Anchor className={classNames({ 'is-active': isProduct })}>상품목록</Anchor>
      </Link>
      <Link href='cart'>
        <Anchor className={classNames({ 'is-active': isCart })}>
          <Tooltip>1</Tooltip>
          장바구니
        </Anchor>
      </Link>
    </UtilsWrapper>
  );
};

export default Utils;

const UtilsWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
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
  &::selection {
    background: transparent;
  }
`;
