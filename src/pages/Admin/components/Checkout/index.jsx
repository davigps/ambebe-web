import React from 'react';

import {
  Container, InfoContainer, Info, Person, Text, Clock, Product, Exclude,
} from './styles';

function Checkout({ data, onClick, onDismiss }) {
  const { checkin, orders } = data;
  const { user, time } = checkin;

  data.checkin.time = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;

  return (
    <Container>
      <InfoContainer type="button" onClick={() => onClick(data)}>
        <Info>
          <Person />
          <Text>{user.name}</Text>
        </Info>
        <Info>
          <Clock />
          <Text>
            Horário:
            {' '}
            {data.checkin.time}
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
      <Exclude type="button" onClick={onDismiss}>
        Dispensar
      </Exclude>
    </Container>
  );
}

export default Checkout;
