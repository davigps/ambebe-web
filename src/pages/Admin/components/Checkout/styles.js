import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';
import { MdPerson, MdAlarm, MdCancel } from 'react-icons/md';

export const Container = styled.div`
  margin: auto;
  width: 80%;
  margin-bottom: 40px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const InfoContainer = styled.div`
  background-color: #eee;
  width: 100%;
  min-height: 130px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 20px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = styled.div`
  margin-left: 15px;
`;

export const Person = styled(MdPerson)`
`;

export const Clock = styled(MdAlarm)`
`;

export const Product = styled(FaBeer)`
`;

export const Exclude = styled.div`
  width: 100%;
  color: white;
  background-color: #aaa;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;

  &:hover {
    background-color: #c63b3b;
  }
`;
