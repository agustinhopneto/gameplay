import styled from 'styled-components/native';
import { Modal } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const Container = styled(Modal)``;

export const Overlay = styled.View`
  flex: 1px;
  background-color: ${theme.colors.overlay};
  justify-content: flex-end;
`;

export const Content = styled.View`
  height: ${152 + getBottomSpace()}px;
`;

export const Info = styled.View`
  flex: 1;
  padding: 24px 24px ${getBottomSpace() + 24}px 24px;
`;
