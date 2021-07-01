import styled from 'styled-components/native';
import { themes } from '../../global/styles/themes';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${themes.dark.background};
`;

export const IntroImage = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;

export const Title = styled.Text`
  color: ${themes.dark.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${themes.dark.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
