import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import { Game as GameProps } from '../../utils/interfaces';
import { GuildIcon } from '../GuildIcon';

import { Container, Content, Title, Type } from './styles';

type Props = RectButtonProps & {
  data: GameProps;
};

export const Game: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <GuildIcon gameIcon={data.background_image} />

      <Content>
        <Title>{data.name}</Title>
        <Type>MC: {data.metacritic || '--'}</Type>
      </Content>

      <Feather name="chevron-right" size={12} color={theme.colors.highlight} />
    </Container>
  );
};
