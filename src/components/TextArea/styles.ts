import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 95px;
  border-radius: 8px;
  padding: 0 1px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled(LinearGradient)`
  width: 100%;
  height: 94px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 94px;
  padding: 12px;
  border-radius: 8px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  font-size: 13px;
`;
