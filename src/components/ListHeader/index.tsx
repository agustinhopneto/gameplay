import React from 'react';
import { Container, Title, Subtitle } from './styles';

type Props = {
  title: string;
  subtitle: string;
};

export const ListHeader: React.FC<Props> = ({ title, subtitle, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
