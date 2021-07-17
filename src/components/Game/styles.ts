import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Type = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.secondary30};
  font-size: 15px;
`;
