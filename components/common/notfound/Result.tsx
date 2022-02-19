import Image from 'next/image';
import { NoResult } from '../../../styles/common/result';
import IconPackage from '../../../public/icon_package.svg';

interface Props {
  title: string;
}

const Result = ({ title }: Props) => {
  return (
    <NoResult>
      <Image src={IconPackage} />
      <strong>{title}</strong>
    </NoResult>
  );
};

export default Result;
