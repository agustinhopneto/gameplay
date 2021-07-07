import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Appointment } from '../../utils/interfaces';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 42px;
`;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Appointments = styled(FlatList as new () => FlatList<Appointment>)`
  padding-top: 8px;
`;
