import React from 'react';
import { Modal } from 'react-responsive-modal';

import {
  Container, Header, PersonContainer, ClockContainer, Person, Text, Clock,
  List, Product, Quantity, Confirm, ConfirmButton,
} from './styles';

function CheckoutModal({
  open, onClose, name, time, orders, onConfirm,
}) {
  return (
    <Modal open={open} onClose={onClose} center>
      <Container>
        <Header>
          <PersonContainer>
            <Person />
            <Text>{name}</Text>
          </PersonContainer>

          <ClockContainer>
            <Clock />
            <Text>{time}</Text>
          </ClockContainer>
        </Header>

        <List>
          {
            orders.map((item) => (
              <Product>
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
