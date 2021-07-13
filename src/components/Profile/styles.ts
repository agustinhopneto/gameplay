import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  margin-left: 20px;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 24px;
  color: ${theme.colors.heading};
  margin-right: 6px;
`;

export const Username = styled.Text`
  font-family: ${theme.fonts.title700};
  font-size: 24px;
  color: ${theme.colors.heading};
`;

export const Message = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`;
