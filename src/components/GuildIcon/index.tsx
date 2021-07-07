import React from 'react';
import { Container } from './styles';

const uri = 'https://wallpaperaccess.com/full/5578407.jpg';

export const GuildIcon: React.FC = () => {
  return <Container source={{ uri }} resizeMode="cover" />;
};
