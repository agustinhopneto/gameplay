import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../global/styles/theme';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Avatar } from '../Avatar';
import { BottomModalView } from '../BottomModalView';
import {
  Container,
  Content,
  User,
  Greeting,
  Username,
  Message,
  ModalTitle,
  ModalButtonText,
  ModalButton,
  ModalContent,
  ModalTitleBold,
  ModalFooter,
} from './styles';

export const Profile: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { user, signOut } = useAuth();
  const { addToast } = useToast();

  const handleSignOut = useCallback(async () => {
    setModalVisible(false);
    await signOut();
    addToast({
      type: 'success',
      title: 'Deslogado com sucesso',
      description: 'Esperamos ver você em breve!',
    });
  }, [signOut, addToast]);

  return (
    <>
      <Container>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setModalVisible(true)}
        >
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
      <BottomModalView visible={modalVisible}>
        <ModalContent>
          <ModalTitle>
            Deseja sair do <ModalTitleBold>GamePlay?</ModalTitleBold>
          </ModalTitle>

          <ModalFooter>
            <ModalButton
              style={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: theme.colors.secondary30,
                marginRight: 8,
              }}
              onPress={() => setModalVisible(false)}
            >
              <ModalButtonText>Não</ModalButtonText>
            </ModalButton>

            <ModalButton onPress={handleSignOut}>
              <ModalButtonText>Sim</ModalButtonText>
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </BottomModalView>
    </>
  );
};
