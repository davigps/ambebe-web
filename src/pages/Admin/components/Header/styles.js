import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdCancel } from 'react-icons/md';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 100px;
  border-bottom: solid 15px #ffe62b;
  background-color: #FFCC29;

  border-bottom-right-radius: 600px;
  border-bottom-left-radius: 600px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const Business = styled(MdBusiness)`
  margin-right: 20px;
  width: 60px;
  height: 60px;
`;

export const InfoContainer = styled.div`
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

export const Email = styled.p`
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const LocationIcon = styled(MdLocationOn)`
  margin-left: 10px;
`;

export const City = styled.p`
`;

export const Disconnect = styled.button`
  border: none;
  background-color: #ff982b;
  border: solid 2px #ff982b;
  height: 60px;
  padding: 0 20px;
  font-size: 22px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    border: solid 2px red;
  }
`;

export const Logout = styled(MdCancel)`
  margin-right: 5px;
`;
