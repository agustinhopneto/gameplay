import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export const Container = styled(RectButton)`
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
