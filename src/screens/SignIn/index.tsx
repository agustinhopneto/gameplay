import React, { useCallback } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { Container, IntroImage, Content, Title, Subtitle } from './styles';

import illustrationImg from '../../assets/illustration.png';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export const SignIn: React.FC = () => {
  const { signIn, loading } = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }, [signIn]);

  return (
    <Background>
      <Container>
        <IntroImage source={illustrationImg} resizeMode="stretch" />
        <Content>
          <View>
            <Title>
              Conecte-se{'\n'}e organize suas{'\n'}
              jogatinas
            </Title>

            <Subtitle>
              Crie grupos para jogar seus games{'\n'}
              favoritos com seus amigos
            </Subtitle>
          </View>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              enabled
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          )}
        </Content>
      </Container>
    </Background>
  );
};
