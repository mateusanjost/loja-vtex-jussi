import React from "react";

import { Right, Left, Container } from "./styles";

import brastempLogo1x from "../../assets/icons/logo-brastemp1x.svg";
import brastempLogo2x from "../../assets/icons/logo-brastemp2x.svg";
import brastempLogo3x from "../../assets/icons/logo-brastemp3x.svg";

import compracertaconsulLogo1x from "../../assets/icons/logo-comprafacil-consul1x.svg";
import compracertaconsulLogo2x from "../../assets/icons/logo-comprafacil-consul2x.svg";
import compracertaconsulLogo3x from "../../assets/icons/logo-comprafacil-consul3x.svg";

import consulLogo1x from "../../assets/icons/logo-consul1x.svg";
import consulLogo2x from "../../assets/icons/logo-consul2x.svg";
import consulLogo3x from "../../assets/icons/logo-consul3x.svg";

import theBarLogo1x from "../../assets/icons/logo-thebar1x.svg";
import theBarLogo2x from "../../assets/icons/logo-thebar2x.svg";
import theBarLogo3x from "../../assets/icons/logo-thebar3x.svg";

import A from "../ui/A";

const StoresBarComponent: React.FC = () => {
  const theBarLogos = [
    {
      src: brastempLogo1x,
      src2x: brastempLogo2x,
      src3x: brastempLogo3x,
      alt: "Brastemp Logo",
      link: "https://www.brastemp.com.br/",
    },
    {
      src: compracertaconsulLogo1x,
      src2x: compracertaconsulLogo2x,
      src3x: compracertaconsulLogo3x,
      alt: "Compra certa Consul Logo",
      link: "https://www.compracerta.com.br/",
    },
    {
      src: consulLogo1x,
      src2x: consulLogo2x,
      src3x: consulLogo3x,
      alt: "Consul Logo",
      link: "https://loja.consul.com.br/",
    },
    {
      src: theBarLogo1x,
      src2x: theBarLogo2x,
      src3x: theBarLogo3x,
      alt: "The bar Logo",
      link: "https://br.thebar.com/",
    },
  ];
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
