import { LoadingWrapper } from '~/assets/styles/common/loading';

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className='loading'>
        <div className='loading__item'></div>
        <div className='loading__item'></div>
      </div>
    </LoadingWrapper>
  );
};

export default Loading;
