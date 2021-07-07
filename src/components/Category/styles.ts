import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

interface CheckProps {
  checked: boolean;
}

export const Container = styled(RectButton)<CheckProps>`
  opacity: ${props => (props.checked ? 1 : 0.5)};
  margin-right: 8px;
  border-radius: 8px;
`;

export const Gradient = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Content = styled(LinearGradient)<CheckProps>`
  width: 103px;
  height: 119px;
  background-color: ${theme.colors.secondary70};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Check = styled.View<CheckProps>`
  position: absolute;
  top: 8px;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: ${props =>
    props.checked ? theme.colors.primary : theme.colors.secondary100};
  align-self: flex-end;
  margin-right: 8px;
  border-radius: 2px;

  ${props =>
    !props.checked &&
    css`
      border-color: ${theme.colors.secondary30};
      border-width: 1px;
    `}
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 15px;
`;
