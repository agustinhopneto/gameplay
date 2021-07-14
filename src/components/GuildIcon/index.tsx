import React from 'react';

import { theme } from '../../global/styles/theme';

import { Container, Icon } from './styles';

const uri =
  'https://pbs.twimg.com/profile_images/1392925163969200136/wNZYmQXx_400x400.jpg';

type Props = {
  url?: string | null;
};

export const GuildIcon: React.FC<Props> = ({ url }) => {
  const { secondary40, secondary60 } = theme.colors;

  return (
    <Container colors={[secondary40, secondary60]}>
      <Icon source={{ uri: url || uri }} resizeMode="cover" />
    </Container>
  );
};
