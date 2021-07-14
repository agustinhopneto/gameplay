import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient)`
  width: 64px;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(LinearGradient)`
  width: 63px;
  height: 47px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 63px;
  height: 47px;
  padding: 0 12px;
  text-align: center;
  border-radius: 8px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  font-size: 13px;
`;
