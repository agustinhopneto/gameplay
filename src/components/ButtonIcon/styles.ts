import styled from 'styled-components/native';
import { themes } from '../../global/styles/themes';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${themes.dark.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${themes.dark.line};
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: ${themes.dark.heading};
  font-size: 15px;
  text-align: center;
`;
