import React from 'react';
import { theme } from '../../global/styles/theme';

import { AvatarImage, Container } from './styles';

type Props = {
  urlImage: string;
};

export const Avatar: React.FC<Props> = ({ urlImage }) => {
  const { secondary30, secondary80 } = theme.colors;

  return (
    <Container colors={[secondary30, secondary80]}>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  );
};
