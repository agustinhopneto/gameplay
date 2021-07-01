import React from 'react';

import dicordImg from '../../assets/discord.png';

import { Container, IconWrapper, Icon, ButtonText } from './styles';

export const ButtonIcon: React.FC = ({ children }) => {
  return (
    <Container activeOpacity={0.7}>
      <IconWrapper>
        <Icon source={dicordImg} />
      </IconWrapper>

      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
