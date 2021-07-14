import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { Background } from '../Background';

import { Container, Overlay, Content, Bar } from './styles';

type Props = ModalProps & {
  children: ReactNode;
};

export const ModalView: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Container transparent animationType="slide" {...rest}>
      <Overlay>
        <Content>
          <Background>
            <Bar />
            {children}
          </Background>
        </Content>
      </Overlay>
    </Container>
  );
};
