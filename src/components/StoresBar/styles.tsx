import styled from "styled-components";
import { grayJussi } from "../../variables";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${grayJussi};
  justify-content: flex-end;
  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 27%;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 5%;
    height: 10vh;
  }
`;

export const Right = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: unset;
    max-width: fit-content;
  }
  a img {
    width: 88px;
    height: 38px;
  }
`;
