import React, { useCallback, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { setCategory } from '../../utils/functions';
import { theme } from '../../global/styles/theme';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { GuildList } from '../GuildList';
import { Guild } from '../../utils/interfaces';

// import { GuildIcon } from '../../components/GuildIcon';

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
import { GuildIcon } from '../../components/GuildIcon';

export const AppointmentCreate: React.FC = () => {
  const [description, setDescription] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<Guild>({} as Guild);

  const handleOpenGuildsModal = useCallback(() => {
    setOpenGuildsModal(true);
  }, []);

  const handleGuildSelect = useCallback((selectedGuild: Guild) => {
    setGuild(selectedGuild);
    setOpenGuildsModal(false);
  }, []);

  const { highlight, secondary40, secondary50, secondary60, secondary70 } =
    theme.colors;

  const [selectedCategory, setSelectedCategory] = useState('');

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
                  <GuildIcon />
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

            <Field>
              <View>
                <FieldLabel>Dia e mês</FieldLabel>
                <FieldColumn>
                  <SmallInput maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput maxLength={2} />
                </FieldColumn>
              </View>

              <View>
                <FieldLabel>Horário</FieldLabel>
                <FieldColumn>
                  <SmallInput maxLength={2} />
                  <Divider>:</Divider>
                  <SmallInput maxLength={2} />
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
              />
            </View>
          </Form>
        </Container>
        <ModalView visible={openGuildsModal}>
          <GuildList handleSelectGuild={handleGuildSelect} />
        </ModalView>
      </KeyboardAvoidingView>

      <Footer>
        <Button title="Agendar" />
      </Footer>
    </Background>
  );
};
