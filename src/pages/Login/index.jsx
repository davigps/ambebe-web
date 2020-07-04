import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';

import {
  Container,
  LoginContainer,
  Logo,
  Description,
  Form,
  InputContainer,
  Input,
  SignInBtn,
  Business,
  Lock,
  ModalText,
} from './styles';
import logonormal from '../../assets/logo-normal.png';

import firebase from '../../services/firebase';

function Login() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    firebase.signInWithEmailAndPassword(email, password).catch(() => {
      setError('Ocorreu um erro ao fazer o login, verifique suas credenciais.');
    });
  };

  return (
    <Container>
      <LoginContainer>
        <Logo src={logonormal} />
        <Description>O MAIOR CLUBE DE CERVEJEIROS DO BRASIL</Description>

        <Form>
          <InputContainer>
            <Business />
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </InputContainer>

          <InputContainer>
            <Lock />
            <Input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          </InputContainer>

          <SignInBtn type="button" onClick={handleLogin}>Iniciar Sessão</SignInBtn>

        </Form>

        <Description color="#555">
          Faça login para ter acesso ao painel administrativo de seu estabelecimento.
        </Description>
      </LoginContainer>

      <Modal open={error} onClose={() => setError('')} center>
        <ModalText>
          {error}
        </ModalText>
      </Modal>
    </Container>
  );
}

export default Login;
