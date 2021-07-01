import React, { ReactNode } from 'react';
import { theme } from '../../global/styles/theme';

import { Container } from './styles';

type Props = {
  children: ReactNode;
};

export const Background: React.FC<Props> = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors;

  return <Container colors={[secondary80, secondary100]}>{children}</Container>;
};
