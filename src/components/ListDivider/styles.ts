import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface Props {
  size: 'small' | 'big';
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.secondary60};
  margin-left: ${props => (props.size === 'small' ? 84 : 108)}px;
`;
