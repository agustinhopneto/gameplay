import React, { useCallback } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
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
  const { user, signOut } = useAuth();
  const { addToast } = useToast();

  const handleSignOut = useCallback(() => {
    Alert.alert('Logout', 'Deseja sair do GamePlay?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: async () => {
          await signOut();
          addToast({
            type: 'success',
            title: 'Deslogado com sucesso',
            description: 'Esperamos ver você em breve!',
          });
        },
      },
    ]);
  }, [signOut, addToast]);

  return (
    <Container>
      <TouchableOpacity activeOpacity={0.6} onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </TouchableOpacity>

      <Content>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>{user.firstName}</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
};
