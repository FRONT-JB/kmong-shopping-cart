import { NoResult } from '~/assets/styles/common/result';

interface Props {
  title: string;
}

const Result = ({ title }: Props) => {
  return (
    <NoResult>
      <strong>{title}</strong>
    </NoResult>
  );
};

export default Result;
