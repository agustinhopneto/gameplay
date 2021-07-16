import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import DiscordSvg from '../../assets/discord.svg';

import { Container, IconWrapper, ButtonText } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <IconWrapper>
        <DiscordSvg width={24} height={24} />
      </IconWrapper>

      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
