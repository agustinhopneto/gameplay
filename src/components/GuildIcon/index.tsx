import React from 'react';

import { theme } from '../../global/styles/theme';

import { Container, Icon } from './styles';

const uri =
  'https://static.wikia.nocookie.net/leagueoflegends/images/f/f2/League%2B.png/revision/latest?cb=20210516152058';

export const GuildIcon: React.FC = () => {
  const { secondary40, secondary60 } = theme.colors;

  return (
    <Container colors={[secondary40, secondary60]}>
      <Icon source={{ uri }} resizeMode="cover" />
    </Container>
  );
};
