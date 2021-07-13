import React, { ReactNode, useCallback } from 'react';
import { Feather as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';

import { Container, Button, Title, Action } from './styles';

type Props = {
  title: string;
  action?: ReactNode;
};

export const Header: React.FC<Props> = ({ title, action }) => {
  const navigation = useNavigation();
  const { secondary70, secondary50, heading } = theme.colors;

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container colors={[secondary70, secondary50]}>
      <Button onPress={handleGoBack}>
        <Icon name="arrow-left" size={24} color={heading} />
      </Button>

      <Title>{title}</Title>

      {action && <Action>{action}</Action>}
    </Container>
  );
};
