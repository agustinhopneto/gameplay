import React, { useCallback, useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import { setCategory } from '../../utils/functions';
import { theme } from '../../global/styles/theme';
import { useToast } from '../../hooks/toast';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { GuildList } from '../GuildList';
import { Game, Guild } from '../../utils/interfaces';
import { GuildIcon } from '../../components/GuildIcon';

import {
  Container,
  Label,
  Form,
  Select,
  SelectBody,
  SelectContent,
  EmptyImage,
  EmptyImageBorder,
  SelectLabel,
  Field,
  FieldLabel,
  FieldColumn,
  Divider,
  FieldHeader,
  Footer,
} from './styles';
import { GameList } from '../GameList';
import { validateDateTime } from '../../utils/validations';

export const AppointmentCreate: React.FC = () => {
  const navigation = useNavigation();

  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [openGamesModal, setOpenGamesModal] = useState(false);
  const [canSave, setCanSave] = useState(false);

  const [guild, setGuild] = useState<Guild>({} as Guild);
  const [game, setGame] = useState<Game>({} as Game);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  const { addToast } = useToast();

  const { highlight, secondary40, secondary50, secondary60, secondary70 } =
    theme.colors;

  useEffect(() => {
    const isFilled =
      ![selectedCategory, day, month, hour, minute, description].includes('') &&
      guild.id &&
      game.id;

    if (isFilled) {
      setCanSave(true);
    } else {
      setCanSave(false);
    }
  }, [selectedCategory, day, month, hour, minute, description, guild, game]);

  const handleSave = useCallback(async () => {
    try {
      validateDateTime(day, month, hour, minute);

      const formattedDate = `${day.padStart(2, '0')}/${month.padStart(
        2,
        '0',
      )} às ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}h`;

      const newAppointment = {
        id: uuid.v4(),
        guild,
        game,
        category: selectedCategory,
        date: formattedDate,
        description,
      };

      const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

      const appointments = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(
        COLLECTION_APPOINTMENTS,
        JSON.stringify([...appointments, newAppointment]),
      );

      navigation.navigate('Home');

      addToast({
        type: 'success',
        title: 'Sucesso!',
        description: 'Seu agendamento foi criado!',
      });
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Dados inválidos',
        description: error.message,
      });
    }
  }, [
    guild,
    selectedCategory,
    day,
    month,
    hour,
    minute,
    description,
    navigation,
    addToast,
    game,
  ]);

  const handleOpenGuildsModal = useCallback(() => {
    setOpenGuildsModal(true);
  }, []);

  const handleCloseGuildsModal = useCallback(() => {
    setOpenGuildsModal(false);
  }, []);

  const handleOpenGamesModal = useCallback(() => {
    setOpenGamesModal(true);
  }, []);

  const handleCloseGamesModal = useCallback(() => {
    setOpenGamesModal(false);
  }, []);

  const handleGuildSelect = useCallback((selectedGuild: Guild) => {
    setGuild(selectedGuild);
    setOpenGuildsModal(false);
  }, []);

  const handleGameSelect = useCallback((selectedGame: Game) => {
    setGame(selectedGame);
    setOpenGamesModal(false);
  }, []);

  const handleSelectCategory = useCallback(
    (categoryId: string) => {
      setSelectedCategory(setCategory(selectedCategory, categoryId) as string);
    },
    [selectedCategory],
  );

  return (
    <Background>
      <Header title="Agendar partida" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Container showsVerticalScrollIndicator={false}>
          <Label>Categoria</Label>
          <CategorySelect
            hasCheckBox
            selectedCategories={selectedCategory}
            setCategory={handleSelectCategory}
          />

          <Form>
            <Select colors={[secondary40, secondary60]}>
              <SelectContent onPress={handleOpenGuildsModal}>
                {guild.id ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <EmptyImageBorder colors={[secondary40, secondary60]}>
                    <EmptyImage colors={[secondary70, secondary50]} />
                  </EmptyImageBorder>
                )}

                <SelectBody>
                  <SelectLabel>
                    {guild.id ? guild.name : 'Selecione um servidor'}
                  </SelectLabel>
                  <Feather name="chevron-right" size={12} color={highlight} />
                </SelectBody>
              </SelectContent>
            </Select>

            <Select
              colors={[secondary40, secondary60]}
              style={{ marginTop: 24 }}
            >
              <SelectContent onPress={handleOpenGamesModal}>
                {game.id ? (
                  <GuildIcon gameIcon={game.background_image} />
                ) : (
                  <EmptyImageBorder colors={[secondary40, secondary60]}>
                    <EmptyImage colors={[secondary70, secondary50]} />
                  </EmptyImageBorder>
                )}

                <SelectBody>
                  <SelectLabel>
                    {game.id ? game.name : 'Selecione um jogo'}
                  </SelectLabel>
                  <Feather name="chevron-right" size={12} color={highlight} />
                </SelectBody>
              </SelectContent>
            </Select>

            <Field>
              <View>
                <FieldLabel>Dia e mês</FieldLabel>
                <FieldColumn>
                  <SmallInput onChangeText={setDay} value={day} maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput
                    onChangeText={setMonth}
                    value={month}
                    maxLength={2}
                  />
                </FieldColumn>
              </View>

              <View>
                <FieldLabel>Horário</FieldLabel>
                <FieldColumn>
                  <SmallInput
                    onChangeText={setHour}
                    value={hour}
                    maxLength={2}
                  />
                  <Divider>:</Divider>
                  <SmallInput
                    onChangeText={setMinute}
                    value={minute}
                    maxLength={2}
                  />
                </FieldColumn>
              </View>
            </Field>

            <View>
              <FieldHeader
                title="Descrição"
                subtitle={`${description.length}/100 caracteres`}
              />
              <TextArea
                maxLength={100}
                multiline
                numberOfLines={3}
                onChangeText={setDescription}
                value={description}
              />
            </View>
          </Form>
        </Container>
      </KeyboardAvoidingView>

      <Footer>
        <Button title="Agendar" enabled={canSave} onPress={handleSave} />
      </Footer>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <GuildList handleSelectGuild={handleGuildSelect} />
      </ModalView>

      <ModalView visible={openGamesModal} closeModal={handleCloseGamesModal}>
        <GameList handleSelectGame={handleGameSelect} />
      </ModalView>
    </Background>
  );
};
