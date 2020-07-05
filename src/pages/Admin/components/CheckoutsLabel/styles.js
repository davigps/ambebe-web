import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ff7530;
  display: flex;
  justify-content: center;
`;

export const Label = styled.h1`
  width: 40%;
  background-color: #ff7530;
  color: white;
  padding: 0 20px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Space = styled.div`
  flex: 1;
  background-color: #FFA72F;
  border-bottom-left-radius: ${(props) => props.left};
  border-bottom-right-radius: ${(props) => props.right};
`;
