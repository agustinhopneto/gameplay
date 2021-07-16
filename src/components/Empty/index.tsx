import React from 'react';
import EmptySvg from '../../assets/empty.svg';

import { Container, Title } from './styles';

type Props = {
  title: string;
};

export const Empty: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <EmptySvg width={150} height={150} />
    </Container>
  );
};
