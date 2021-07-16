import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';
import { Background } from '../Background';

import { Container, Overlay, Content, Bar } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export const ModalView: React.FC<Props> = ({
  children,
  closeModal,
  ...rest
}) => {
  return (
    <Container transparent statusBarTranslucent animationType="slide" {...rest}>
      <Overlay>
        <Content>
          <Background>
            <Bar onPress={closeModal} activeOpacity={0.6} />
            {children}
          </Background>
        </Content>
      </Overlay>
    </Container>
  );
};
