import React from 'react';

import {
  Container, Info, Person, Text, Clock, Product,
} from './styles';

function Checkout({ name, time, orders }) {
  const date = `${time.getHours()}:${time.getMinutes()}`;

  return (
    <Container>
      <Info>
        <Person />
        <Text>{name}</Text>
      </Info>
      <Info>
        <Clock />
        <Text>
          Horário:
          {' '}
          {date}
        </Text>
      </Info>
      <Info>
        <Product />
        <Text>
          {orders.length}
          {' '}
          Produtos
        </Text>
      </Info>
    </Container>
  );
}

export default Checkout;
