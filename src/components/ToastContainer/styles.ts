import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  position: absolute;
  align-self: center;
  padding: ${getBottomSpace() + 24}px 24px;
  overflow: hidden;
`;
