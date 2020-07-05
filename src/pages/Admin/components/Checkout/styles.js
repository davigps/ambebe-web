import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';
import { MdPerson, MdAlarm } from 'react-icons/md';

export const Container = styled.div`
  background-color: #eee;
  width: 80%;
  min-height: 130px;
  margin: auto;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 20px;
  margin-bottom: 40px;
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
