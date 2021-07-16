import React from 'react';
import LottieView from 'lottie-react-native';

import playAnimation from '../../assets/loading.json';

import { Container } from './styles';

export const Load: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={playAnimation}
        style={{ width: 150, height: 150 }}
        renderMode="AUTOMATIC"
        autoPlay
        duration={2800}
      />
    </Container>
  );
};
