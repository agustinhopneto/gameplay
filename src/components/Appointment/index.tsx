import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { categories } from '../../utils/categories';
import { Appointment as AppointmentProps } from '../../utils/interfaces';
import { GuildIcon } from '../GuildIcon';

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
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../global/styles/theme';
import { ListDivider } from '../ListDivider';

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export const Appointment: React.FC<Props> = ({ data, ...rest }) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container>
        <GuildIcon />

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
      <ListDivider />
    </RectButton>
  );
};
