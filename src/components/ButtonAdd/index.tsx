import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { Container } from './styles';
import { theme } from '../../global/styles/theme';

export const ButtonAdd: React.FC<RectButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name="plus" color={theme.colors.heading} size={24} />
    </Container>
  );
};
