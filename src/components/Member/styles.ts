import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface Props {
  isOnline: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
`;

export const Content = styled.View`
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${props =>
    props.isOnline ? theme.colors.on : theme.colors.primary};
`;

export const StatusInfo = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;
