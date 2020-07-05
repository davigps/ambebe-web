import React from 'react';

import {
  Container, Main, Business, InfoContainer, Name, Email, Location,
  LocationIcon, City, Disconnect, Logout,
} from './styles';

function Header({
  name, email, city, onLogout,
}) {
  return (
    <Container>
      <Main>
        <Business />
        <InfoContainer>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </InfoContainer>
      </Main>
      <Location>
        <City>{city}</City>
        <LocationIcon />
      </Location>

      <Disconnect type="button" onClick={onLogout}>
        <Logout />
        Desconectar
      </Disconnect>
    </Container>
  );
}

export default Header;
