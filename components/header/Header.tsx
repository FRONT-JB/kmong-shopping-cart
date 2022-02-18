import styled from 'styled-components';
import Utils from './Utils';

const Header = () => {
  return (
    <HeaderWrapper>
      <WrapperInner>
        <Logo>크몽이네 과일가게</Logo>
        <Utils />
      </WrapperInner>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background: ${({ theme }) => theme.color.white};
`;

const WrapperInner = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 1440px;
  text-align: center;
  padding: 12px 0px;
`;

const Logo = styled.h1`
  display: inline-block;
  font-size: 20px;
  vertical-align: middle;
  line-height: 2;
  cursor: default;
  &::selection {
    background: transparent;
  }
`;
