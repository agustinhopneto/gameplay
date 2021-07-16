import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ListDivider } from '../../components/ListDivider';
import { Empty } from '../../components/Empty';

import { setCategory } from '../../utils/functions';
import { Appointment as AppointmentProps } from '../../utils/interfaces';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';

import { Container, Header, Content, Appointments } from './styles';
import { Load } from '../../components/Load';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const loadAppointments = useCallback(async () => {
    setLoading(true);
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    let appointmentsData: AppointmentProps[] = storage
      ? JSON.parse(storage)
      : [];

    if (selectedCategory) {
      appointmentsData = appointmentsData.filter(
        item => item.category === selectedCategory,
      );
    }

    setAppointments(appointmentsData);
    setLoading(false);
  }, [selectedCategory]);

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [loadAppointments]),
  );

  const handleSelectCategory = useCallback(
    (categoryId: string) => {
      setSelectedCategory(setCategory(selectedCategory, categoryId) as string);
    },
    [selectedCategory],
  );

  const handleAppointmentDetails = useCallback(
    (appointment: AppointmentProps) => {
      navigation.navigate('AppointmentDetails', { appointment });
    },
    [navigation],
  );

  const handleCreateAppointment = useCallback(() => {
    navigation.navigate('AppointmentCreate');
  }, [navigation]);

  const handleDeleteAppointment = useCallback(
    async (id: string) => {
      const newAppointments = appointments.filter(item => item.id !== id);

      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify(newAppointments),
      );

      setAppointments(newAppointments);
    },
    [appointments],
  );

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={handleCreateAppointment} />
        </Header>

        <CategorySelect
          selectedCategories={selectedCategory}
          setCategory={handleSelectCategory}
        />

        <Content>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          {!appointments.length && (
            <Empty title="Ops... Parece que você não possui partidas marcadas..." />
          )}

          {loading && <Load />}

          {!loading && !!appointments.length && (
            <Appointments
              data={appointments}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                  handleDelete={() => handleDeleteAppointment(item.id)}
                />
              )}
              ItemSeparatorComponent={() => <ListDivider />}
              contentContainerStyle={{ paddingBottom: 48 }}
            />
          )}
        </Content>
      </Container>
    </Background>
  );
};
