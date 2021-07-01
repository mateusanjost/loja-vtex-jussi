import styled from "styled-components";
import { blackJussi } from "../../variables";

export const Footer = styled.footer`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${blackJussi};
`;

export const Left = styled.div`
  max-height: 27px;
  max-width: 142px;
`;

export const Right = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
`;
