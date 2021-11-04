import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonText({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </TouchableOpacity>
  );
}
