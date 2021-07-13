import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';

import { setCategory } from '../../utils/functions';

import { Container, Header, Content, Appointments } from './styles';

const appointments = [
  {
    id: '1',
    game: 'League of Legends',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    game: 'League of Legends',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '3',
    game: 'League of Legends',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '4',
    game: 'League of Legends',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '5',
    game: 'League of Legends',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '6',
    game: 'League of Legends',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/06 às 20:40h',
    description:
      'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
];

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = useCallback(
    (categoryId: string) => {
      setSelectedCategory(setCategory(selectedCategory, categoryId) as string);
    },
    [selectedCategory],
  );

  const handleAppointmentDetails = useCallback(() => {
    navigation.navigate('AppointmentDetails');
  }, [navigation]);

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <CategorySelect
          selectedCategories={selectedCategory}
          setCategory={handleSelectCategory}
        />

        <Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <Appointments
            data={appointments}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 48 }}
          />
        </Content>
      </Container>
    </Background>
  );
};
