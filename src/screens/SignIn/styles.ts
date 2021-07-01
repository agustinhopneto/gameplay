import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const IntroImage = styled.Image`
  width: 100%;
  height: 360px;
  margin-top: 20px;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -20%;
  padding: 0 50px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;

export const Subtitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;
