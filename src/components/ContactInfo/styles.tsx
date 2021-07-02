import styled from "styled-components";
import { pinkJussi } from "../../variables";
import { textLarge, autoLayout, paragraph } from "../../styles/mixins";

export const Container = styled(autoLayout)`
  width: 100%;
  display: flex;
  background: ${pinkJussi};
  height: 480px;
  justify-content: center;
`;

export const Title = styled(textLarge)`
  & {
    @media (min-width: 1000px) {
      max-width: 37%;
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
  }
`;

export const P = styled(paragraph)``;

export const Center = styled(autoLayout)`
  & {
    justify-content: center;
    text-transform: lowercase;
  }
`;
