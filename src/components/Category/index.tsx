import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

import { Container, Gradient, Content, Check, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked: boolean;
  hasCheckIcon?: boolean;
};

export const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked,
  hasCheckIcon = false,
  ...rest
}) => {
  const { secondary40, secondary50, secondary60, secondary70 } = theme.colors;

  return (
    <Container {...rest} checked={checked}>
      <Gradient colors={[secondary40, secondary60]}>
        <Content checked={checked} colors={[secondary70, secondary50]}>
          {hasCheckIcon && <Check checked={checked} />}
          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Gradient>
    </Container>
  );
};
