import classNames from 'classnames';
import styled from 'styled-components';

interface Props {
  label: string;
  color?: string;
  isPrime?: boolean;
  isActive?: boolean;
  disabled?: boolean;
}

const Index = ({ label, color, isPrime = false, isActive, disabled = false }: Props) => {
  return (
    <Button
      type='button'
      className={classNames({ [`${color}`]: color, 'is-active': isActive })}
      disabled={disabled}
    >
      {isPrime && <i className='is-prime'>prime</i>}
      {label}
    </Button>
  );
};

export default Index;

const Button = styled.button`
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
    color: ${({ theme }) => theme.color.black};
  }
  &.orange {
    background: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};
  }
  &.yellow {
    background: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.black};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.gray.base};
    color: ${({ theme }) => theme.color.black.lighten2};
  }
`;
