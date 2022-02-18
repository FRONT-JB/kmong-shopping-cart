import styled from 'styled-components';
import { Button } from './common';

const Filter = () => {
  return (
    <FilterWrapper>
      <Button label='전체' />
      <Button label='일반 과일' />
      <Button label='과일' isPrime />
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div``;
