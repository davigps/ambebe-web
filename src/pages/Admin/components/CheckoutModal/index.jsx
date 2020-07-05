import React from 'react';
import { Modal } from 'react-responsive-modal';

import {
  Container, Header, InfoContainer, Person, Text, Clock,
  List, Product, Quantity, Confirm, ConfirmButton,
} from './styles';

function CheckoutModal({
  open, onClose, data, onConfirm,
}) {
  const { checkin, orders } = data;
  const { name, time } = checkin.user;

  return (
    <Modal open={open} onClose={onClose} center>
      <Container>
        <Header>
          <InfoContainer>
            <Person />
            <Text>{name}</Text>
          </InfoContainer>

          <InfoContainer>
            <Clock />
            <Text>{time}</Text>
          </InfoContainer>
        </Header>

        <List>
          {
            orders.map((item) => (
              <Product key={Math.random()}>
                <Text>{item.name}</Text>
                <Quantity>
                  x
                  {item.quantity}
                </Quantity>
              </Product>
            ))
          }
        </List>

        <Confirm>
          <ConfirmButton onClick={onConfirm}>
            Confirmar
          </ConfirmButton>
        </Confirm>
      </Container>
    </Modal>
  );
}

export default CheckoutModal;
