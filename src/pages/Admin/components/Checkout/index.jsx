import React from 'react';

import {
  Container, InfoContainer, Info, Person, Text, Clock, Product, Exclude,
} from './styles';

function Checkout({ data, onClick, onDismiss }) {
  const { user, products, time } = data;

  data.time = typeof time !== 'string' ? (
    `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`
  ) : time;

  return (
    <Container>
      <InfoContainer type="button" onClick={() => onClick(data)}>
        <Info>
          <Person />
          <Text>{user}</Text>
        </Info>
        <Info>
          <Clock />
          <Text>
            Horário:
            {' '}
            {data.time}
          </Text>
        </Info>
        <Info>
          <Product />
          <Text>
            {products.length}
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
