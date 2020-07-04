import styled from "styled-components";
import { MEDIA } from "../../App";

export const Container = styled.div`
  margin-top: 100px;

  ${MEDIA} {
    margin-top: 60px;
  }
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 600px;
`;
