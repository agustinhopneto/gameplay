import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';
import { Member } from '../../utils/interfaces';

export const Banner = styled.ImageBackground`
  width: 100%;
  height: 234px;
  background-color: ${theme.colors.primary};
`;

export const BannerContent = styled.View`
  flex: 1;
  padding: 0 24px 24px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  padding-bottom: 12px;
`;

export const Subtitle = styled.Text`
  font-size: 13px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
  line-height: 21px;
`;

export const Content = styled.View`
  margin-top: 24px;
  flex: 1;
`;

export const Members = styled(FlatList as new () => FlatList<Member>)`
  padding-top: 4px;
`;

export const Footer = styled.View`
  padding: 8px 24px 20px;
  margin-bottom: ${getBottomSpace()}px;
`;
