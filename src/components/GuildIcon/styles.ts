import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.Image`
  width: 64px;
  height: 68px;
  border-radius: 8px;
  margin-right: 20px;
  border-width: 1px;
  border-color: ${theme.colors.secondary40};
`;
