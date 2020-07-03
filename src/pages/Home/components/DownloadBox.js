import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import styled from "styled-components";
import { MEDIA } from "../../../App";

function DownloadBox() {
  return (
    <Download>
      <DownloadCall>
        <DownloadTitle>Baixe já o nosso aplicativo!</DownloadTitle>
        <DownloadText>
          CONSULTE OS BARES PARCEIROS E COMECE A PARTICIPAR. CADA CERVEJA
          CONSUMIDA AUMENTA A SUA PONTUAÇÃO. JUNTE PONTOS E TROQUE POR BEBIDAS.
        </DownloadText>
      </DownloadCall>
      <DownloadBtn>
        Download <FaArrowCircleDown />
      </DownloadBtn>
      <DownloadCall>
        <DownloadTitle>Não perca tempo!</DownloadTitle>
        <DownloadText>
          A VENDA DE BEBIDAS PARA MENORES DE 18 ANOS É PROIBIDA. BEBA COM
          MODERAÇÃO!
        </DownloadText>
      </DownloadCall>
    </Download>
  );
}

export default DownloadBox;

const Download = styled.section`
  width: 100%;
  background-color: black;
  color: white;
  padding: 60px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DownloadCall = styled.div`
  width: 840px;
  text-align: center;

  ${MEDIA} {
    width: 100%;
  }
`;

const DownloadTitle = styled.h1`
  font-size: 60px;

  ${MEDIA} {
    font-size: 30px;
  }
`;

const DownloadText = styled.p`
  font-size: 30px;

  ${MEDIA} {
    font-size: 14px;
  }
`;

const DownloadBtn = styled.button`
  background-color: #ffcc29;
  border: none;
  padding: 10px 50px;
  margin: 60px 0;
  font-size: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    margin-left: 10px;
  }

  &:hover {
    filter: brightness(70%);
    cursor: pointer;
  }

  ${MEDIA} {
    font-size: 22px;
  }
`;
