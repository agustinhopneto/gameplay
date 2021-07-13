import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient)`
  width: 100%;
  padding: ${getStatusBarHeight() + 24}px 24px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(BorderlessButton)`
  position: absolute;
  left: 24px;
  top: 44px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.title700};
  font-size: 20px;
  color: ${theme.colors.heading};
`;

export const Action = styled.View`
  position: absolute;
  right: 24px;
  top: 44px;
`;
