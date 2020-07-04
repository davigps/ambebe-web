import React from 'react';

import { 
  Container, 
  LoginContainer, 
  Logo, 
  Description, 
  Form, 
  InputContainer, 
  Input, 
  SignInBtn,
  Person,
  Lock, 
} from './styles';
import logonormal from '../../assets/logo-normal.png';

function Login() {
  return (
    <Container>
      <LoginContainer>
        <Logo src={logonormal}/>
        <Description>O MAIOR CLUBE DE CERVEJEIROS DO BRASIL</Description>

        <Form>
          <InputContainer>
            <Person />
            <Input placeholder="Identificador" />
          </InputContainer>

          <InputContainer>
            <Lock />
            <Input placeholder="Senha"/>
          </InputContainer>

          <SignInBtn type="button">Iniciar Sessão</SignInBtn>

        </Form>

        <Description color="#555">
          Faça login para ter acesso ao painel administrativo de seu estabelecimento.
        </Description>
      </LoginContainer>
    </Container>
  );
}

export default Login;
