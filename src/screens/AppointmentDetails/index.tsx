import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { Member } from '../../utils/interfaces';
import bannerImg from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member as MemberItem } from '../../components/Member';

import {
  Banner,
  Title,
  Subtitle,
  BannerContent,
  Members,
  Content,
  Footer,
} from './styles';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

const members: Member[] = [
  {
    id: '1',
    username: 'Agustinho Neto',
    avatar_url: 'https://github.com/agustinhopneto.png',
    status: 'online',
  },
  {
    id: '2',
    username: 'Diego Fernandes',
    avatar_url: 'https://github.com/diego3g.png',
    status: 'online',
  },
  {
    id: '3',
    username: 'Alexsander Lira',
    avatar_url: 'https://github.com/alelira.png',
    status: 'offline',
  },
];

export const AppointmentDetails: React.FC = () => {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <Banner source={bannerImg}>
        <BannerContent>
          <Title>League of Legends</Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Subtitle>
        </BannerContent>
      </Banner>

      <Content>
        <ListHeader title="Jogadores" subtitle="Total 3" />

        <Members
          data={members}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MemberItem data={item} />}
          ItemSeparatorComponent={() => <ListDivider size="small" />}
          contentContainerStyle={{ paddingBottom: 48 }}
          showsVerticalScrollIndicator={false}
        />
      </Content>

      <Footer>
        <ButtonIcon title="Entrar no Servidor" />
      </Footer>
    </Background>
  );
};
