import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SimpleAnimation } from 'react-native-simple-animations';

import { ToastMessage, useToast } from '../../hooks/toast';
import { Container, Content, Title, Description } from './styles';
import { theme } from '../../global/styles/theme';

interface ToastProps {
  message: ToastMessage;
}

interface IconTypes {
  info: 'info';
  error: 'alert-circle';
  success: 'check-circle';
}

const icons: IconTypes = {
  info: 'info',
  error: 'alert-circle',
  success: 'check-circle',
};

export const Toast: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <SimpleAnimation
      movementType="spring"
      direction="left"
      distance={100}
      durantion={500}
      fade
    >
      <Container
        type={message.type}
        hasDescription={Number(!!message.description)}
        style={{ elevation: 1 }}
        activeOpacity={0.6}
        onPress={() => removeToast(message.id)}
      >
        <Feather
          name={icons[message.type]}
          size={18}
          color={theme.colors.heading}
        />
        <Content>
          <Title>{message.title}</Title>
          {message.description && (
            <Description>{message.description}</Description>
          )}
        </Content>
      </Container>
    </SimpleAnimation>
  );
};
