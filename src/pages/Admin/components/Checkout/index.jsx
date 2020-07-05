import React from 'react';

import {
  Container, Info, Person, Text, Clock, Product,
} from './styles';

function Checkout({ name, time, orders }) {
  return (
    <Container>
      <Info>
        <Person />
        <Text>{name}</Text>
      </Info>
      <Info>
        <Clock />
        <Text>{time}</Text>
      </Info>
      <Info>
        <Product />
        <Text>{orders.length}</Text>
      </Info>
    </Container>
  );
}

export default Checkout;
