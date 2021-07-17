/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import { Container } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  icon?: string;
  marginLeft?: number;
};

export const ButtonAdd: React.FC<Props> = ({
  icon = 'plus',
  marginLeft = 0,
  ...rest
}) => {
  return (
    <Container {...rest} style={{ marginLeft }}>
      <Icon name={icon as any} color={theme.colors.heading} size={24} />
    </Container>
  );
};
