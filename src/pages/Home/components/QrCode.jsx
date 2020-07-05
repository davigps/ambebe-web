import React from 'react';
import styled from 'styled-components';

import { MEDIA } from '../../../App';
import qrcode from '../../../assets/qrcode.png';

function Ranking() {
  return (
    <Container>
      <DescriptionContainer>
        <Title>Checkin em Bares</Title>
        <Description>
          Use o QR code disponibilizado nos bares para realizar o
          seu checkIn e creditar os seus pontos!
        </Description>
      </DescriptionContainer>
      <Image>
        <QrCodeImage src={qrcode} />
      </Image>
    </Container>
  );
}

export default Ranking;

const Container = styled.section`
  display: flex;
  padding: 40px 0 60px 0;
  justify-content: space-evenly;
  background-color: #e0b126;

  ${MEDIA} {
    flex-direction: column-reverse;
  }
`;

const Image = styled.div`
  ${MEDIA} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA} {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: white;

  ${MEDIA} {
    font-size: 30px;
  }
`;

const Description = styled.p`
  width: 600px;
  display: flex;
  font-size: 27px;
  align-items: center;
  justify-content: center;

  ${MEDIA} {
    width: 100%;
    font-size: 20px;
  }
`;

const QrCodeImage = styled.img`
  width: 300px;

  ${MEDIA} {
    width: 40%;
  }
`;
