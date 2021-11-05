import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
