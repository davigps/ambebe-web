import React, { useState } from 'react';

import CheckoutModal from '../CheckoutModal';
import {
  Container, InfoContainer, Info, Person, Text, Clock, Product, Exclude,
} from './styles';

function Checkout({ data }) {
  const [open, setOpen] = useState(false);

  const { checkin, orders } = data;
  const { user, time } = checkin;

  const date = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;

  return (
    <Container>
      <InfoContainer type="button" onClick={() => setOpen(true)}>
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
      <Exclude type="button">
        Dispensar
      </Exclude>

      <CheckoutModal
        open={open}
        onClose={() => setOpen(false)}
        name={user.name}
        time={date}
        orders={orders}
        onConfirm={() => console.log('confirmado')}
      />
    </Container>
  );
}

export default Checkout;
