import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';

import { Background } from '../Background';

import { Container, Content, Overlay, Info } from './styles';

type Props = ModalProps & {
  children?: ReactNode;
};

export const BottomModalView: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Container transparent statusBarTranslucent animationType="slide" {...rest}>
      <Overlay>
        <Content>
          <Background>
            <Info>{children}</Info>
          </Background>
        </Content>
      </Overlay>
    </Container>
  );
};
