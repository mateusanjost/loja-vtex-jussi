import styled from "styled-components";
import { createMap } from "styled-components-breakpoint";
import { Rectangles } from "../../types";
import { blackJussi, greenJussi, pinkJussi } from "../../variables";
import { ButtonLeft } from "../../types/index";

const breakpoints = {
  xs: 0,
  sm: 576,
  xm: 768,
  xd: 1366,
  xf: 1920,
};

const map = createMap(breakpoints);
//const breakpoint = createBreakpoint(breakpoints);

export const Introduction = styled.div`
  width: 100%;
  display: flex;
  background: ${greenJussi};
 ${map(
   { xs: "auto", sm: "auto", xm: "auto", xd: "560px", xf: "560px" },
   (height) => `height: ${height};`
 )}
  ${map(
    { xd: "center", xf: "flex-end" },
    (justifyContent) => `justify-content: ${justifyContent};
    `
  )}
  ${map(
    { xs: "column", sm: "column", xm: "column", xd: "row", xf: "row" },
    (justifyContent) => `flex-direction: ${justifyContent};
    `
  )}
`;

export const Title = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  ${map(
    { xs: "44px", sm: "44px", xm: "44px", xd: "44px", xf: "64px" },
    (fontSize) => `font-size: ${fontSize};`
  )}
  line-height: 77px;
  text-transform: uppercase;
  ${map(
    { xm: "none", xd: "64%", xf: "47%" },
    (width) => `max-width: ${width};`
  )}
`;

export const Left = styled.div`
  ${map(
    { xm: "none", xd: "45%", xf: "45%" },
    (width) => `max-width: ${width};`
  )}
  align-self: center;
  @media (max-width: ${breakpoints.xm}px) {
    flex-direction: column;
    width: 65%;
    align-self: center;
  }
`;

export const P = styled.p`
  ${map(
    { xm: "none", xd: "46%", xf: "37%" },
    (width) => `max-width: ${width};`
  )}
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  ${map({ xm: "none", xd: "22%", xf: "43%" }, (width) => `width: ${width};`)}
  margin-top: -5%;
  ${map(
    { xs: "column", sm: "column", xm: "column", xd: "row", xf: "row" },
    (justifyContent) => `flex-direction: ${justifyContent};
    `
  )}

  button {
    align-self: center;
  }
  @media (max-width: ${breakpoints.xm}px) {
    display: grid;
    margin-top: -5%;
    -ms-flex-direction: column;
    width: 100%;
    padding: 5%;
    padding-left: 25%;
    grid-template-columns: min-content;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  ${map(
    { xm: "none", xd: "45%", xf: "45%" },
    (width) => `max-width: ${width};`
  )}
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  ${map(
    { xm: "none", xd: "45%", xf: "45%" },
    (width) => `max-width: ${width};`
  )}

  div {
    z-index: 1;
    top: 7vh;
    @media (max-width: ${breakpoints.xm}px) {
      top: 8vh;
    }
    ${map({ xd: "18%", xf: "-24%" }, (right) => `right: ${right};`)}
  }
`;

export const Rectangle = styled.div<Rectangles>`
  background: #fff
    ${(props) =>
      props.backgroundImage
        ? `url(${props.backgroundImage}) no-repeat center 20%`
        : null};
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 271px;
  width: 209px;
  justify-content: flex-end;
  padding: 5%;
  position: relative;
  top: ${(props) => (!props.left ? "0" : "7vh")};
  right: ${(props) => (!props.left ? "-80px" : "16%")};
  z-index: ${(props) => (!props.left ? "2" : "3")};
`;

export const Button = styled.button<ButtonLeft>`
  background: ${(props) => (props.left ? "transparent" : "#fff")};
  border: 1px solid ${(props) => (props.left ? blackJussi : pinkJussi)};
  color: ${(props) => (props.left ? blackJussi : pinkJussi)};
  border-radius: ${(props) => (props.left ? "6px" : "24px")};
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
  @media (max-width: ${breakpoints.xm}px) {
    margin: 0;
    align-self: baseline;
  }
`;
