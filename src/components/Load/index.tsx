import React from 'react';
import { theme } from '../../global/styles/theme';

import { Container, Loading } from './styles';

export const Load: React.FC = () => {
  return (
    <Container>
      <Loading size="large" color={theme.colors.primary} />
    </Container>
  );
};
