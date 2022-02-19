import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import cls from 'classnames';
import { FILTER_METHOD } from '../constants/filter';
import { changeFilter, filterStateSelector } from '../store/reducer/productReducer';
import { Button } from '../styles/common/button';
import { FilterTypes } from '../types/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(filterStateSelector);

  const handleChangeFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget as {
      name: FilterTypes;
    };
    dispatch(changeFilter(name));
  };

  return (
    <FilterWrapper>
      <TabButton
        type='button'
        name={FILTER_METHOD.ALL}
        className={cls({ yellow: filterState === FILTER_METHOD.ALL })}
        onClick={handleChangeFilter}
      >
        전체
      </TabButton>
      <TabButton
        type='button'
        name={FILTER_METHOD.GENERAL}
        className={cls({ yellow: filterState === FILTER_METHOD.GENERAL })}
        onClick={handleChangeFilter}
      >
        일반 과일
      </TabButton>
      <TabButton
        type='button'
        name={FILTER_METHOD.PRIME}
        className={cls({ yellow: filterState === FILTER_METHOD.PRIME })}
        onClick={handleChangeFilter}
      >
        <i className='is-prime'>prime</i>
        과일
      </TabButton>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div``;

const TabButton = styled(Button)``;
