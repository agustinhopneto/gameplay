import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
