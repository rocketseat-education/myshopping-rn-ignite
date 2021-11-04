import React from 'react';

import { Container, Title } from './styles';

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  );
}
