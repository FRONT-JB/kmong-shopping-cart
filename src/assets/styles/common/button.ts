import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  padding: 0 16px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  .is-prime {
    display: inline-block;
    vertical-align: top;
    margin-right: 4px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.orange};
  }
  &::selection {
    background: transparent;
  }
  &.gray {
    background: ${({ theme }) => theme.color.gray.lighten1};
    color: ${({ theme }) => theme.color.black.base};
  }
  &.orange {
    background: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
  }
  &.yellow,
  &.is-active {
    background: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.black.base};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.gray.base};
    color: ${({ theme }) => theme.color.black.lighten2};
  }
`;
