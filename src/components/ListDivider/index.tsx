import React from 'react';

import { Container } from './styles';

type Props = {
  size?: 'small' | 'big';
};

export const ListDivider: React.FC<Props> = ({ size = 'big' }) => {
  return <Container size={size} />;
};
