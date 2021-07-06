import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`;

export const AvatarImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;
