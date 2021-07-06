import React, { useCallback } from 'react';

import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonIcon';

import { Container, IntroImage, Content, Title, Subtitle } from './styles';

import illustrationImg from '../../assets/illustration.png';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
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
        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </Content>
    </Container>
  );
};
