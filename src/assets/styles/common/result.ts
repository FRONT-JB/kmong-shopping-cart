import styled from 'styled-components';

export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  *::selection {
    background: transparent;
  }
  strong {
    margin-top: 20px;
    cursor: default;
    color: ${({ theme }) => theme.color.black.base};
  }
`;
