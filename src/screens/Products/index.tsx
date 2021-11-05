import React from 'react';

import { ShoppingList } from '../../components/ShoppingList';
import { FormBox } from '../../components/FormBox';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Products() {
  return (
    <Container>
      <Header title="Lista de compras" />
      <FormBox />
      <ShoppingList />
    </Container>
  );
}
