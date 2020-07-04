import styled from 'styled-components';

import { MEDIA } from '..';

export const Container = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 20px;
  -webkit-box-shadow: 0px 7px 17px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 17px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 17px -7px rgba(0, 0, 0, 0.75);
  background-color: black;

  ${MEDIA} {
    height: 60px;
  }
`;

export const LogoSpace = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  margin-right: auto;

  img {
    max-width: 200px;
  }

  ${MEDIA} {
    margin: 0;
    position: absolute;
    left: 40%;

    img {
      max-width: 80px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  font-weight: 400;

  ${MEDIA} {
    display: none;
  }
`;
