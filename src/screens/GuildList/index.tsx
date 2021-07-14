import React from 'react';
import { Guild } from '../../components/Guild';
import { Guild as GuildProps } from '../../utils/interfaces';
import { ListDivider } from '../../components/ListDivider';

import { Container, List } from './styles';

const guilds: GuildProps[] = [
  {
    id: '1',
    name: 'Sushi Restaurant',
    icon: null,
    owner: true,
  },
  {
    id: '2',
    name: 'Sushi Restaurant',
    icon: null,
    owner: true,
  },
  {
    id: '3',
    name: 'Sushi Restaurant',
    icon: null,
    owner: true,
  },
];

type Props = {
  handleSelectGuild: (guild: GuildProps) => void;
};

export const GuildList: React.FC<Props> = ({ handleSelectGuild }) => {
  return (
    <Container>
      <List
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleSelectGuild(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </Container>
  );
};
