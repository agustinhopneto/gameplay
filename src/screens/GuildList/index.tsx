import React, { useCallback, useState, useEffect } from 'react';
import { Guild } from '../../components/Guild';
import { Guild as GuildProps } from '../../utils/interfaces';
import { ListDivider } from '../../components/ListDivider';

import { api } from '../../services/api';

import { Container, List } from './styles';
import { Load } from '../../components/Load';
import { Empty } from '../../components/Empty';

type Props = {
  handleSelectGuild: (guild: GuildProps) => void;
};

export const GuildList: React.FC<Props> = ({ handleSelectGuild }) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([] as GuildProps[]);
  const [loading, setLoading] = useState(true);

  const loadGuilds = useCallback(async () => {
    setLoading(true);
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);

    setLoading(false);
  }, []);

  useEffect(() => {
    loadGuilds();
  }, [loadGuilds]);

  return (
    <Container>
      {loading && !guilds.length && <Load />}

      {!loading && !guilds.length && (
        <Empty title="Ops... Não foi possível carregar suas Guilds..." />
      )}

      {!loading && !!guilds.length && (
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
      )}
    </Container>
  );
};
