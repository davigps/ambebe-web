import React from 'react';
import { Modal } from 'react-responsive-modal';

import {
  Container, Header, InfoContainer, Person, Text, Clock,
  List, Product, Quantity, Confirm, ConfirmButton,
} from './styles';

function CheckoutModal({
  open, onClose, data, onConfirm,
}) {
  const { user, time, products } = data;

  return (
    <Modal open={open} onClose={onClose} center>
      <Container>
        <Header>
          <InfoContainer>
            <Person />
            <Text>{user}</Text>
          </InfoContainer>

          <InfoContainer>
            <Clock />
            <Text>{time}</Text>
          </InfoContainer>
        </Header>

        <List>
          {
            products.map((item) => (
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
