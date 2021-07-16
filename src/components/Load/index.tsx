import React from 'react';
import LottieView from 'lottie-react-native';

import playAnimation from '../../assets/loading.json';

import { Container } from './styles';

type Props = {
  full?: boolean;
};

export const Load: React.FC<Props> = ({ full = true }) => {
  return (
    <Container full={full}>
      <LottieView
        source={playAnimation}
        style={{ width: full ? 108 : 54, height: full ? 108 : 54 }}
        renderMode="AUTOMATIC"
        autoPlay
        duration={2500}
      />
    </Container>
  );
};
