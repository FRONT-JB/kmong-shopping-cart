import styled from 'styled-components';

interface Props {
  icon: string;
}

const Index = ({ icon }: Props) => {
  return <Emoji>{icon}</Emoji>;
};

export default Index;

const Emoji = styled.span`
  display: inline-block;
  font-size: 100px;
  cursor: default;
  text-align: center;
  flex: 1;
  &::selection {
    background: none;
  }
`;
