import React from 'react';

import {
  Container, InfoContainer, Info, Person, Text, Clock, Product, Exclude,
} from './styles';

function Checkout({ data }) {
  const { checkin, orders } = data;
  const { user, time } = checkin;

  const date = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;

  return (
    <Container>
      <InfoContainer>
        <Info>
          <Person />
          <Text>{user.name}</Text>
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
      </InfoContainer>
      <Exclude>
        Dispensar
      </Exclude>
    </Container>
  );
}

export default Checkout;
