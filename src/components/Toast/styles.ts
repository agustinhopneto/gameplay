import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
  hasDescription: number;
}

const backgrounds = {
  info: theme.colors.secondary30,
  error: theme.colors.primary,
  success: theme.colors.on,
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  background-color: ${props => backgrounds[props.type]};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  margin-top: 8px;
`;

export const Content = styled.View`
  padding: 0 8px;
  margin: 0 4px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  font-size: 15px;
  font-family: ${theme.fonts.text500};
`;

export const Description = styled.Text`
  color: ${theme.colors.heading};
  font-size: 13px;
  font-family: ${theme.fonts.text400};
  margin-right: 4px;
`;
