import styled from 'styled-components';
import Card from '../components/Card';
import { Button } from '../components/common';
import Filter from '../components/Filter';

const Home = () => {
  const isPrime = true;
  return (
    <HomeWrapper>
      <Filter />
      <ProductList>
        <Card title='바나나' icon={'🍌'} price={6000} stock={5} isPrime={true}>
          <Actions>
            <Button label='빼기' color='gray' />
            <Button label='담기' color={isPrime ? 'orange' : 'yellow'} />
          </Actions>
        </Card>
      </ProductList>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  max-width: 1440px;
  padding: 96px 0;
  margin: 0 auto;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -24px 0 -24px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  width: 100%;
  button:not(:first-child) {
    margin-left: 16px;
  }
`;
