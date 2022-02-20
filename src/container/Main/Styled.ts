import styled from 'styled-components';
import { Button } from '~/assets/styles/common/button';

export const HomeWrapper = styled.div`
  max-width: 1440px;
  padding: 96px 0;
  margin: 0 auto;
  &.empty {
    height: 100%;
  }
  @media screen and (max-width: 1520px) {
    padding: 96px 15px;
  }
`;
