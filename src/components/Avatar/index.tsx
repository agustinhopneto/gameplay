import React from 'react';
import { theme } from '../../global/styles/theme';

import { AvatarImage, Container } from './styles';

type Props = {
  urlImage: string;
};

export const Avatar: React.FC<Props> = ({ urlImage }) => {
  const { secondary40, secondary60 } = theme.colors;

  return (
    <Container colors={[secondary40, secondary60]}>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  );
};
