import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  Loading,
} from './styles';
import logonormal from '../../assets/logo-normal.png';

import firebase from '../../services/firebase';
import api from '../../services/api';
import { login } from '../../services/auth';

function Login() {
  const history = useHistory();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    const firebaseResponse = await firebase.signInWithEmailAndPassword(email, password)
      .catch(() => {
        setLoading(false);
        setError('Ocorreu um erro ao fazer o login, verifique suas credenciais.');
      });

    if (firebaseResponse) {
      const { user } = firebaseResponse;

      try {
        const response = await api.post('/bar', {
          email: user.email,
        });
        const { token, barExist } = response.data;

        login(token, barExist);
        setLoading(false);
        history.push('/admin');
      } catch (err) {
        setLoading(false);
        setError('Não foi possível realizar o login, tente novamente mais tarde!');
      }
    }
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

          <SignInBtn type="submit" onClick={handleLogin}>Iniciar Sessão</SignInBtn>

        </Form>

        <Description color="#555">
          Faça login para ter acesso ao painel administrativo de seu estabelecimento.
        </Description>
      </LoginContainer>

      <Modal open={error || loading} onClose={() => setError('')} center showCloseIcon={!loading}>
        {
          error
            ? (
              <ModalText>
                {error}
              </ModalText>
            ) : (
              <Loading />
            )
        }
      </Modal>
    </Container>
  );
}

export default Login;
