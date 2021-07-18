import React from 'react';
import { TextInputProps } from 'react-native';
import { theme } from '../../global/styles/theme';

import { Container, Content, Input } from './styles';

export const BigInput: React.FC<TextInputProps> = ({ ...rest }) => {
  const { secondary40, secondary50, secondary60, secondary70 } = theme.colors;

  return (
    <Container colors={[secondary40, secondary60]}>
      <Content colors={[secondary70, secondary50]}>
        <Input
          autoCapitalize="words"
          autoCorrect={false}
          placeholderTextColor={theme.colors.highlight}
          {...rest}
        />
      </Content>
    </Container>
  );
};
