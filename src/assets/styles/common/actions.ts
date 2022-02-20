import styled from 'styled-components';
import { Button } from './button';

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  width: 100%;
  button:not(:first-child) {
    margin-left: 16px;
  }
`;

export const ActionButton = styled(Button)``;
