import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Game } from '../../utils/interfaces';

export const Container = styled.View`
  flex: 1px;
  align-items: center;
  padding-top: 24px;
`;

export const List = styled(FlatList as new () => FlatList<Game>)`
  width: 100%;
`;

export const Input = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 54px 12px;
`;
