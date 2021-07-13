import React from 'react';
import { Member as MemberProps } from '../../utils/interfaces';
import { Avatar } from '../Avatar';

import {
  Container,
  Content,
  Title,
  Status,
  BulletStatus,
  StatusInfo,
} from './styles';

type Props = {
  data: MemberProps;
};

export const Member: React.FC<Props> = ({ data }) => {
  const isOnline = data.status === 'online';

  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />

      <Content>
        <Title>{data.username}</Title>
        <Status>
          <BulletStatus isOnline={isOnline} />
          <StatusInfo>{isOnline ? 'Disponível' : 'Ocupado'}</StatusInfo>
        </Status>
      </Content>
    </Container>
  );
};
