import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

import { categories } from '../../utils/data';
import { Appointment as AppointmentProps } from '../../utils/interfaces';
import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../global/styles/theme';

import {
  Container,
  Content,
  Header,
  Game,
  Title,
  Category,
  PlayersInfo,
  PlayerType,
  Footer,
  DateInfo,
  Date,
} from './styles';

type Props = RectButtonProps & {
  data: AppointmentProps;
  handleDelete: () => Promise<void>;
};

export const Appointment: React.FC<Props> = ({
  data,
  handleDelete,
  ...rest
}) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  const swipeoutBtns = [
    {
      text: 'Excluir',
      backgroundColor: theme.colors.primary,
      underlayColor: theme.colors.line,
      onPress: async () => {
        await handleDelete();
      },
    },
  ];

  return (
    <Swipeout
      right={swipeoutBtns}
      autoClose
      backgroundColor="transparent"
      sensitivity={10}
    >
      <RectButton {...rest}>
        <Container>
          <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />

          <Content>
            <Header>
              <Title>{data.guild.name}</Title>
              <Category>{category.title}</Category>
            </Header>

            <Game>{data.game}</Game>

            <Footer>
              <DateInfo>
                <CalendarSvg />
                <Date>{data.date}</Date>
              </DateInfo>

              <PlayersInfo>
                <PlayerSvg fill={owner ? on : primary} />
                <PlayerType owner={owner}>
                  {owner ? 'Anfitrião' : 'Visitante'}
                </PlayerType>
              </PlayersInfo>
            </Footer>
          </Content>
        </Container>
      </RectButton>
    </Swipeout>
  );
};
