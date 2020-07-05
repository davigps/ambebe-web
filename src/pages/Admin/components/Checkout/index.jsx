import React from 'react';

import {
  Container, InfoContainer, Info, Person, Text, Clock, Product, Exclude,
} from './styles';

function Checkout({ name, time, orders }) {
  const date = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;
  return (
    <>
      <Container>
        <InfoContainer>
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
        </InfoContainer>
        <Exclude>
          Dispensar
        </Exclude>
      </Container>

    </>
  );
}

export default Checkout;
