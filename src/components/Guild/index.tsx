import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Guild as GuildProps } from '../../utils/interfaces';
import { GuildIcon } from '../GuildIcon';

import { Container, Content, Title, Type } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  data: GuildProps;
};

export const Guild: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <GuildIcon />

      <Content>
        <Title>{data.name}</Title>
        <Type>{data.owner ? 'Administrador' : 'Convidado'}</Type>
      </Content>

      <Feather name="chevron-right" size={12} color={theme.colors.highlight} />
    </Container>
  );
};
