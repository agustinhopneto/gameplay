import styled from 'styled-components/native';
import { Modal } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';

export const Container = styled(Modal)``;

export const Overlay = styled.View`
  flex: 1px;
  background-color: ${theme.colors.overlay};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 28}px;
`;

export const Bar = styled(RectButton)`
  width: 56px;
  height: 4px;
  border-radius: 2px;
  background-color: ${theme.colors.secondary30};
  align-self: center;
  margin-top: 12px;
`;
