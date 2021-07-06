import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import { Container, Gradient, Content, Check, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}) => {
  const { secondary30, secondary70, secondary80 } = theme.colors;

  return (
    <Container {...rest} checked={checked}>
      <Gradient colors={[secondary30, secondary80]}>
        <Content checked={checked} colors={[secondary80, secondary70]}>
          <Check checked={checked} />
          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Gradient>
    </Container>
  );
};
