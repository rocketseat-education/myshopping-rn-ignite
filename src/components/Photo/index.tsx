import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Container, EmptyPhotoContainer, Image, EmptyPhotoText } from './styles';

type Props = TouchableOpacityProps & {
  uri?: string;
}

export function Photo({ uri, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <Container>
        {
          uri ? <Image source={{ uri }} /> : (
            <EmptyPhotoContainer>
              <EmptyPhotoText>
                clique para adicionar
                ou para trocar a foto
              </EmptyPhotoText>
            </EmptyPhotoContainer >
          )
        }
      </Container>
    </TouchableOpacity>
  )
}