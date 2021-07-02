import styled from "styled-components";
import { autoLayout } from "../../styles/mixins";
import { ButtonLeft } from "../../types";
import { blackJussi, pinkJussi, greenJussi } from "../../variables";

export const Container = styled(autoLayout)`
  width: 100%;
  background: #fff;
  height: 557px;
  justify-content: space-evenly;
  @media (max-width: 767px) {
    height: auto;
    padding-top: 10%;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-evelyn;
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 5%;
  }
`;

export const Box = styled.div`
  background: #fff;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 4px;
  height: 381px;
  width: 241px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2%;
  @media (max-width: 767px) {
    margin-bottom: 8%;
  }
`;

export const Title = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  width: 54%;
  display: flex;
  justify-content: flex-start;
  b {
    color: ${greenJussi};
    padding-right: 1%;
  }
`;

export const Button = styled.button<ButtonLeft>`
  background: ${greenJussi};
  border: none;
  color: ${(props) => (props.left ? blackJussi : pinkJussi)};
  border-radius: ${(props) => (props.left ? "6px" : "24px")};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 24px;
  cursor: pointer;
  width: 96%;
  align-self: center;
  @media (max-width: 768px) {
    margin: 0;
    align-self: baseline;
  }
`;
export const NameProduct = styled(autoLayout)`
  & {
    font-weight: bold;
  }
`;

export const DescProduct = styled(autoLayout)`
  & {
    color: ${pinkJussi};
    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const Elipse = styled.div`
  align-self: center;
  background: #f2f2f2;
  width: 50%;
  height: 10vh;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const List = styled(autoLayout)`
  & {
    flex-direction: column;
  }
  ul,
  li {
    line-height: 0;
  }
`;
