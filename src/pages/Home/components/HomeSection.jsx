import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import { MEDIA } from '../../../App';
import cerveja from '../../../assets/cerveja.jpg';
import logo from '../../../assets/logo-branca.png';

function HomeSection() {
  return (
    <Container>
      <TitleContainer>
        <ScrollableAnchor id="inicio">
          <Title size={45}>FAÇA PARTE DO</Title>
        </ScrollableAnchor>
        <Logo src={logo} alt="Ambebe" />
        <Title size={30}>O MAIOR CLUBE DE CERVEJEIROS DO BRASIL!</Title>
        <Call>
          <CallBtn>SAIBA MAIS</CallBtn>
        </Call>
      </TitleContainer>
    </Container>
  );
}

const Container = styled.section`
  background-image: url(${cerveja});
  background-size: cover;
  height: 650px;
  padding: 50px;
  color: white;

  ${MEDIA} {
    padding: 20px;
  }
`;

const TitleContainer = styled.div`
  width: 800px;

  ${MEDIA} {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.size}px;
  font-weight: bold;

  ${MEDIA} {
    font-size: 22px;
  }
`;

const Logo = styled.img`
  width: 80%;
`;

const Call = styled.div`
  width: 100%;
  padding: 30px 0 0 170px;

  ${MEDIA} {
    padding: 30px;
  }
`;

const CallBtn = styled.button`
  border: solid 2px white;
  background: none;
  color: white;
  padding: 5px 20px;
  font-size: 40px;

  &:hover {
    cursor: pointer;
    border-color: gray;
    color: gray;
  }
`;

export default HomeSection;
