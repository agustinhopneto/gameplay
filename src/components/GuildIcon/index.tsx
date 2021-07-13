import React from 'react';
import { Container } from './styles';

const uri =
  'https://static.wikia.nocookie.net/leagueoflegends/images/f/f2/League%2B.png/revision/latest?cb=20210516152058';

export const GuildIcon: React.FC = () => {
  return <Container source={{ uri }} resizeMode="cover" />;
};
