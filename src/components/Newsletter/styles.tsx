import styled from "styled-components";
import { blackJussi, greenJussi } from "../../variables";
import { textLarge, autoLayout, paragraph } from "../../styles/mixins";

export const Container = styled(autoLayout)`
  width: 100%;
  display: flex;
  background: ${blackJussi};
  height: 480px;
  justify-content: center;
`;

export const Title = styled(textLarge)`
  & {
    @media (min-width: 1000px) {
      max-width: 61%;
    }
    display: flex;
    flex-direction: column;
    height: 40vh;
    text-align: center;
    height: 10vh;
    justify-content: flex-end;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    text-transform: lowercase;
  }
`;

export const P = styled(paragraph)``;

export const EmailLabel = styled(paragraph)`
  width: 117px;
  height: 24px;
  color: #ffffff;
`;

export const Center = styled(autoLayout)`
  & {
    justify-content: center;
    text-transform: lowercase;
  }
`;

export const Form = styled.form`
  @media (min-width: 1000px) {
    width: 502px;
  }
  height: 60px;
  display: flex;
  border-bottom: 1px solid #03ffa5;
`;
export const Button = styled.button`
  color: ${greenJussi};
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const Input = styled.input`
  background: ${blackJussi};
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
