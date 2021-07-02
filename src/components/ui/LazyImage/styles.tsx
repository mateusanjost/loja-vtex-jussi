import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

export const ImageLazy = styled.img`
  object-fit: cover;
  width: ${(props) => (props.width == null ? "100%" : props.width)};
  height: ${(props) => (props.height == null ? "auto" : props.height)};
`;
