import styled from 'styled-components';
import { BsLock } from 'react-icons/bs';
import { MdBusiness } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import bar from '../../assets/bar.jpg';
import { MEDIA } from '../../App';

export const Container = styled.div`
  background-image: url(${bar});
  background-attachment: fixed;
  background-size: cover;

  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin: 40px 0;
`;

export const LoginContainer = styled.div`
  background-color: white;
  width: 400px;
  height: 600px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;

  ${MEDIA} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const Logo = styled.img`
  width: 70%;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 25px;
  ${({ color }) => (color ? `color: ${color}` : '')}

  ${MEDIA} {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  margin: 10px 0;
  border: solid 3px #FFCC29;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

export const Input = styled.input`
  background: none;
  height: 100%;
  border: none;
  padding: 0 10px;
  color: black;
  font-size: 18px;
`;

export const SignInBtn = styled.button`
  background-color: #FFCC29;
  height: 50px;
  border-radius: 25px;
  width: 100%;
  border: none;
  margin-top: 20px;
  font-size: 22px;

  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;

export const Business = styled(MdBusiness)``;

export const Lock = styled(BsLock)``;

export const ModalText = styled.p`
  width: 300px;
  height: 150px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-size: 18px;
`;

export const Loading = styled(AiOutlineLoading3Quarters)`
  font-size: 60px;
  animation: spin 1s linear infinite;
`;
