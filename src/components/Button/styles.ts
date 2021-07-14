import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.text500};
  font-size: 15px;
  text-align: center;
`;
