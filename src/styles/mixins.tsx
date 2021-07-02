import styled, { css } from "styled-components";
import { mixins } from "../types";

import "@fontsource/barlow";
// inheriting props
export const baseShadow = css<mixins>`
  box-shadow: ${({ color }) => `0 10px 6px -6px ${color || "#777"}`};
`;

// explicitly setting props
export const baseText = ({ color, size, family, style }: mixins) => `
  color: ${color || "#fff"};
  font-size: ${size || "1rem"};
  font-family: ${family || "Barlow"};
  font-style: ${style || "normal"};
`;

export const paragraph = styled.div`
  ${baseText};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

export const textLarge = styled.div`
  ${baseText};
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.5rem;
  text-transform: uppercase;
`;

export const textExtraLarge = styled.div`
  ${baseText};
  font-size: 4rem;
  font-weight: 500;
  line-height: 4.8125rem;
  text-transform: uppercase;
`;

export const autoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
