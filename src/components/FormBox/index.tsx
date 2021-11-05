import React from 'react';

import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';

export function FormBox() {
  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
      />

      <ButtonIcon
        size='large'
        icon="add-shopping-cart"
        onPress={() => { }}
      />
    </Container>
  );
}
