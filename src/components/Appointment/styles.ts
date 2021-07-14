import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface OwnerProps {
  owner: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
  padding: 16px 24px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;

export const Game = styled.Text`
  font-family: ${theme.fonts.text400};
  font-size: 13px;
  color: ${theme.colors.highlight};
  line-height: 13px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
  font-size: 13px;
  margin-left: 12px;
`;

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayerType = styled.Text<OwnerProps>`
  font-family: ${theme.fonts.text500};
  color: ${props => (props.owner ? theme.colors.on : theme.colors.primary)};
  font-size: 13px;
  margin-left: 12px;
`;
