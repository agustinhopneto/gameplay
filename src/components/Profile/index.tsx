import React from 'react';
import { Avatar } from '../Avatar';
import {
  Container,
  Content,
  User,
  Greeting,
  Username,
  Message,
} from './styles';

export const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar urlImage="https://github.com/agustinhopneto.png" />

      <Content>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Agustinho</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
};
