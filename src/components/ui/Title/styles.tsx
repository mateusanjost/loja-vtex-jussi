import styled from "styled-components";

import { Titles } from "../../../types/index";

export const Title = styled.div<Titles>`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "32px")};
  line-height: 40px;
`;
