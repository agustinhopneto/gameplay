import React, { useCallback, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { Game as GameProps } from '../../utils/interfaces';
import { ListDivider } from '../../components/ListDivider';

import { Container, List, Input } from './styles';
import { Load } from '../../components/Load';
import { Empty } from '../../components/Empty';
import { Game } from '../../components/Game';
import { rawgApi } from '../../services/rawg';
import { BigInput } from '../../components/BigInput';
import { ButtonAdd } from '../../components/ButtonAdd';

type Props = {
  handleSelectGame: (game: GameProps) => void;
};

export const GameList: React.FC<Props> = ({ handleSelectGame }) => {
  const [games, setGames] = useState<GameProps[]>([] as GameProps[]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadGames = useCallback(async () => {
    setLoading(true);

    const response = await rawgApi.get('/games', {
      params: {
        page_size: 20,
        page: 1,
        search_precise: true,
        search,
      },
    });

    setGames(response.data.results);
    setLoading(false);
  }, [search]);

  const handleSearch = useCallback(async () => {
    Keyboard.dismiss();
    await loadGames();
  }, [loadGames]);

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <Container>
      <Input>
        <BigInput
          placeholder="Digite o nome do jogo"
          value={search}
          onChangeText={setSearch}
        />
        <ButtonAdd icon="search" marginLeft={12} onPress={handleSearch} />
      </Input>

      {loading && !games.length && <Load />}

      {!loading && !games.length && (
        <Empty title="Ops... Não foi possível carregar seus Games..." />
      )}

      {!loading && !!games.length && (
        <List
          data={games}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Game data={item} onPress={() => handleSelectGame(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      )}
    </Container>
  );
};
