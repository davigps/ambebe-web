import styled from "styled-components";

const MEDIA = "@media only screen and (max-width: 900px)";

export const MenuNormal = styled.menu`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const MenuNormalItem = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #c90225;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-right: 3vw;

  &:hover {
    color: #ccc;
  }
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  margin-right: 3vw;

  background-color: #c90225;
  padding: 20px 40px;
  border-radius: 70px;

  img {
    margin-left: 20px;
    width: 25px;
  }

  &:hover {
    filter: brightness(70%);
  }

  ${MEDIA} {
    margin-right: 20px;
    padding: 10px 20px;

    img {
      width: 20px;
      margin: 0;
    }
  }
`;

export const SmallMenu = styled.button`
  background: none;
  border: none;
  width: 60px;
  margin-right: 25px;
  cursor: pointer;

  ${MEDIA} {
    position: absolute;
    left: 20px;
  }
`;

export const MenuBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #c90225;
  margin: 6px 0;
  transition: 0.4s;
`;

export const MenuSlide = styled.aside`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c90225;
  border-top: solid 1vh #a50003;
  ${MEDIA} {
    top: 60px;
  }
`;

export const MenuSlideItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  width: 100%;
  border-bottom: solid 0.5vh #a50003;

  padding: 2.3vh 0;
  &:hover {
    color: #ccc;
  }
`;
