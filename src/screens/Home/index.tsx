import React, { useCallback, useState } from 'react';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Appointment } from '../../components/Appointment';

import { Container, Header, Content, Appointments } from './styles';
import { Background } from '../../components/Background';

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategorySelect = useCallback(
    (categoryId: string) => {
      const alreadySelected = selectedCategories.findIndex(
        category => category === categoryId,
      );

      if (alreadySelected >= 0) {
        const filteredCategories = selectedCategories.filter(
          category => category !== categoryId,
        );

        setSelectedCategories(filteredCategories);

        return;
      }

      setSelectedCategories([...selectedCategories, categoryId]);
    },
    [selectedCategories],
  );

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd />
        </Header>

        <CategorySelect
          selectedCategories={selectedCategories}
          setCategory={handleCategorySelect}
        />

        <Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <Appointments
            data={appointments}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Appointment data={item} />}
          />
        </Content>
      </Container>
    </Background>
  );
};
