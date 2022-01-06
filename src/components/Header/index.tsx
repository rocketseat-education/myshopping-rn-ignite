import React from 'react';
import { ButtonIcon } from '../ButtonIcon';

import { Container, Title } from './styles';

type Props = {
  title: string;
  showLogoutButton?: boolean;
}

export function Header({ title, showLogoutButton = false }: Props) {
  return (
    <Container showLogoutButton={showLogoutButton}>
      <Title>
        {title}
      </Title>

      {
        showLogoutButton &&
        <ButtonIcon
          icon="logout"
          color="alert"
          style={{ marginTop: 20 }}
          onPress={() => {}}
        />
      }
    </Container>
  );
}
