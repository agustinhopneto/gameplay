import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title500};
  font-size: 15px;
  color: ${theme.colors.secondary30};
  text-align: center;
  max-width: 240px;
  margin-bottom: 12px;
`;
