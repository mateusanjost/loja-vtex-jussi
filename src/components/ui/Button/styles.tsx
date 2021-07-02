import styled from "styled-components";

import { Buttons } from "../../../types/index";

export const Button = styled.button<Buttons>`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "32px")};
  line-height: 40px;
  padding: 8px 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  max-width: 98%;
  align-self: center;
  
  @media (max-width: 770px) {
    margin: 0;
    align-self: baseline;
  }
`;
