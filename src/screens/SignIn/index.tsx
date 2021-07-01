import React from 'react';

import { ButtonIcon } from '../../components/ButtonIcon';

import { Container, IntroImage, Content, Title, Subtitle } from './styles';

import illustrationImg from '../../assets/illustration.png';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <IntroImage source={illustrationImg} resizeMode="stretch" />
      <Content>
        <Title>
          Organize{'\n'}
          suas jogatinas{'\n'}
          facilmente
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon>Entrar com Discord</ButtonIcon>
      </Content>
    </Container>
  );
};
