import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: 47px;
  height: 47px;
  border-radius: 8px;
`;
