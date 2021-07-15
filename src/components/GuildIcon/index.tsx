import React, { useMemo } from 'react';

import { theme } from '../../global/styles/theme';

import { Container, Icon } from './styles';

import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null | undefined;
};

export const GuildIcon: React.FC<Props> = ({ guildId, iconId }) => {
  const { secondary40, secondary60 } = theme.colors;

  const imageUrl = useMemo(() => {
    return `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
  }, [guildId, iconId]);

  return (
    <Container colors={[secondary40, secondary60]}>
      {iconId ? (
        <Icon source={{ uri: imageUrl }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </Container>
  );
};
