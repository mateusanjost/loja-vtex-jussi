import styled from "styled-components";
import * as jussiPallet from "../../variables";
import searchIcon from "../../assets/icons/search.svg";

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
  a {
    order: 1;
    text-decoration: none;
    color: ${jussiPallet.blackJussi};
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 90% 50%;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 24px;
  order: 2;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  &::placeholder {
    color: ${jussiPallet.pinkJussi};
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${window.innerWidth <= 1366 ? "40%" : "20%"};
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const ContainerLogin = styled.div`
  display: flex;
  order: 3;
  flex-direction: row-reverse;
  width: 10%;
  justify-content: space-around;
  align-items: center;
`;
