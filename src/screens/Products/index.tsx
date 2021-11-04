import React from 'react';

import { ShoppingList } from '../../components/ShoppingList';
import { FormBox } from '../../components/FormBox';
import { Header } from '../../components/Header';
import { Container } from './styles';

import { shoppingListExample } from '../../utils/shopping.list.data';

export function Products() {
  return (
    <Container>
      <Header title="Lista de compras" />

      <FormBox />

      <ShoppingList data={shoppingListExample} />
    </Container>
  );
}
