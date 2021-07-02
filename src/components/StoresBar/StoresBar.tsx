import React from "react";

import { Right, Left, Container } from "./styles";

import A from "../ui/A";
import theBarLogos from "../../constants/stores";

const StoresBarComponent: React.FC = () => {
  return (
    <Container>
      <Left>
        <strong>Nossas principais lojas vtex</strong>
        <b>{window.innerWidth < 768 ? "↓" : "→"}</b>
      </Left>
      <Right>
        {theBarLogos.map((icon, index) => {
          return (
            <A href={icon.link} key={index.toString()}>
              <img
                src={icon.src}
                srcSet={`${icon.src}, ${icon.src2x} 2x, ${icon.src3x} 3x`}
                alt={icon.alt}
              />
            </A>
          );
        })}
      </Right>
    </Container>
  );
};

export default StoresBarComponent;
