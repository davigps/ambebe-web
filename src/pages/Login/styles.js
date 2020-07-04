import styled from 'styled-components';

import login from '../../assets/login.jpg';

export const Container = styled.div`
  background-image: url(${login});
  background-attachment: fixed;
  background-size: cover;

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  background-color: white;
  width: 400px;
  height: 600px;
  border-radius: 40px;
`;
