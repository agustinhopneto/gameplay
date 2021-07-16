import React, { useCallback, useEffect, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { Platform, Share } from 'react-native';

import { theme } from '../../global/styles/theme';
import { Appointment, Member } from '../../utils/interfaces';
import { api } from '../../services/api';

import bannerImg from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member as MemberItem } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Load } from '../../components/Load';

import {
  Banner,
  Title,
  Subtitle,
  BannerContent,
  Members,
  Content,
  Footer,
} from './styles';
import { Empty } from '../../components/Empty';
import { useToast } from '../../hooks/toast';

type Params = {
  appointment: Appointment;
};

type GuildWdget = {
  id: string;
  name: string;
  instant_invite: string;
  members: Member[];
  presence_count: number;
};

export const AppointmentDetails: React.FC = () => {
  const route = useRoute();
  const { appointment } = route.params as Params;

  const [loading, setLoading] = useState(false);
  const [widget, setWidget] = useState<GuildWdget>({} as GuildWdget);

  const { addToast } = useToast();

  const loadGuildWidget = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get<GuildWdget>(
        `/guilds/${appointment.guild.id}/widget.json`,
      );

      setWidget(response.data);
    } catch (error) {
      addToast({
        type: 'info',
        title: 'Widget desabilitado',
        description: 'Por favor, habilite o Widget do servidor!',
      });
    } finally {
      setLoading(false);
    }
  }, [appointment, addToast]);

  useEffect(() => {
    loadGuildWidget();
  }, [loadGuildWidget]);

  const handleShareInvitation = useCallback(() => {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${appointment.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }, [widget, appointment]);

  const handleOpenGuild = useCallback(() => {
    Linking.openURL(widget.instant_invite);
  }, [widget]);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          widget.instant_invite && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <Banner source={bannerImg}>
            <BannerContent>
              <Title>{appointment.guild.name}</Title>
              <Subtitle>{appointment.description}</Subtitle>
            </BannerContent>
          </Banner>

          <Content>
            <ListHeader
              title="Jogadores"
              subtitle={`Total ${widget.presence_count || 0}`}
            />

            {!widget.members ? (
              <Empty title="Ops... Não foi possível carregar os membros dessa Guild..." />
            ) : (
              <Members
                data={widget.members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <MemberItem data={item} />}
                ItemSeparatorComponent={() => <ListDivider size="small" />}
                contentContainerStyle={{ paddingBottom: 48 }}
                showsVerticalScrollIndicator={false}
              />
            )}
          </Content>

          <Footer>
            <ButtonIcon
              title="Entrar no Servidor"
              onPress={handleOpenGuild}
              enabled={!!widget.instant_invite}
            />
          </Footer>
        </>
      )}
    </Background>
  );
};
