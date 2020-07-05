import styled from 'styled-components';
import { MdPerson, MdAlarm } from 'react-icons/md';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  border-bottom: solid 1px gray;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Person = styled(MdPerson)``;

export const Text = styled.p`
  margin-left: 10px;
`;

export const Clock = styled(MdAlarm)``;

export const List = styled.section`
  flex: 1;
  overflow-y: scroll;
`;

export const Product = styled.div`
  margin: 10px;
  background-color: #eee;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
`;

export const Quantity = styled.div``;

export const Confirm = styled.footer`
  width: 100%;
  border-top: solid 1px gray;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmButton = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 30px;
  padding: 0 20px;
  color: white;
  font-weight: bold;
  background-color: #4aa500;

  &:hover {
    filter: brightness(70%);
    cursor: pointer;
  }
`;
