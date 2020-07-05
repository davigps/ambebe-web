import React from 'react';

import { Container, Label, Space } from './styles';

function CheckoutsLabel() {
  return (
    <Container>
      <Space left="0px" right="80px" />
      <Label>Pedidos de Confirmação</Label>
      <Space left="80px" right="0px" />
    </Container>
  );
}

export default CheckoutsLabel;
