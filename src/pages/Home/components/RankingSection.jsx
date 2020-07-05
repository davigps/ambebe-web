import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import { MEDIA } from '../../../App';
import ranking from '../../../assets/ranking.png';

function Ranking() {
  return (
    <Container>
      <Image>
        <ScrollableAnchor id="sobre">
          <RankingImage src={ranking} />
        </ScrollableAnchor>
      </Image>
      <DescriptionContainer>
        <Title>Ranking de Pontos</Title>
        <Description>
          Consuma os produtos AMBEV e suba na classificação de pontos da sua região.
          O melhor colocado ganhará recompensas ao final do período de disputa!
        </Description>
      </DescriptionContainer>
    </Container>
  );
}

export default Ranking;

const Container = styled.section`
  display: flex;
  padding: 40px 0;
  justify-content: space-evenly;

  ${MEDIA} {
    width: 100%;
    flex-direction: column;
  }
`;

const Image = styled.div`
  ${MEDIA} {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA} {
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: #e29218;

  ${MEDIA} {
    font-size: 30px;
  }
`;

const Description = styled.p`
  width: 600px;
  display: flex;
  font-size: 22px;
  align-items: center;
  justify-content: center;

  ${MEDIA} {
    width: 90%;
    font-size: 16px;
  }
`;

const RankingImage = styled.img`
  ${MEDIA} {
    width: 100%;
  }
`;
