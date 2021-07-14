import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';
import { ListHeader } from '../../components/ListHeader';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  margin: 32px 24px 12px;
`;

export const Form = styled.View`
  padding: 24px;
  margin-top: 32px;
  margin-bottom: 4px;
`;

export const Select = styled(LinearGradient)`
  width: 100%;
  border-radius: 8px;
  padding: 1px;
`;

export const SelectContent = styled(RectButton)`
  background-color: ${theme.colors.secondary90};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

export const EmptyImageBorder = styled(LinearGradient)`
  width: 64px;
  height: 68px;
  border-radius: 8px;
`;

export const EmptyImage = styled(LinearGradient)`
  width: 63px;
  height: 67px;
  border-radius: 8px;
`;

export const SelectBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const SelectLabel = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  margin-right: 24px;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 28px;
`;

export const FieldLabel = styled.Text`
  font-size: 18px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  margin-bottom: 12px;
`;

export const FieldColumn = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin: 0 4px;
  font-size: 18px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.highlight};
`;

export const FieldHeader = styled(ListHeader)`
  padding: 0;
  margin-top: 28px;
  margin-bottom: 12px;
`;

export const Footer = styled.View`
  padding: 8px 24px 20px;
  margin-bottom: ${getBottomSpace()}px;
`;
