import React from 'react';
import { theme } from '../../global/styles/theme';

import { AvatarImage, Container } from './styles';

type Props = {
  urlImage?: string | null;
};

const uri =
  'https://pbs.twimg.com/profile_images/1392925163969200136/wNZYmQXx_400x400.jpg';

export const Avatar: React.FC<Props> = ({ urlImage }) => {
  const { secondary40, secondary60 } = theme.colors;

  return (
    <Container colors={[secondary40, secondary60]}>
      <AvatarImage source={{ uri: urlImage || uri }} />
    </Container>
  );
};
