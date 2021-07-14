import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Guild } from '../../utils/interfaces';

export const Container = styled.View`
  flex: 1px;
  align-items: center;
  padding-top: 24px;
`;

export const List = styled(FlatList as new () => FlatList<Guild>)`
  width: 100%;
`;
