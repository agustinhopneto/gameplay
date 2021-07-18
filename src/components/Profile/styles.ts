import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
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

export const ModalTitle = styled.Text`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title500};
`;

export const ModalTitleBold = styled.Text`
  font-size: 24px;
  color: ${theme.colors.heading};
  font-family: ${theme.fonts.title700};
`;

export const ModalButton = styled(RectButton)`
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  width: 49%;
  background-color: ${theme.colors.primary};
`;

export const ModalButtonText = styled.Text`
  font-size: 15px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
`;

export const ModalContent = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ModalFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
