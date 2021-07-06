import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import dicordImg from '../../assets/discord.png';

import { Container, IconWrapper, Icon, ButtonText } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={dicordImg} />
      </IconWrapper>

      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
