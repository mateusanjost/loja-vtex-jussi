import React from "react";

import JussiAbout from "../../assets/images/image-jussi2x.jpg";
//import LazyImage from "../ui/LazyImage/LazyImage";
import { ContainerAbout, Title, P, Container, Background } from "./styles";

//import A from "../A";

const AboutComponent: React.FC = () => {
  return (
    <ContainerAbout>
      <Container>
        <Title>
          OLÁ, SOMOS <br />A JÜSSI
        </Title>
        <P>
          A Jüssi é uma agência integrante do grupo global WPP que vem há 10
          anos consolidando o pensamento voltado para produtos e resolução de
          problemas. Nosso área dedicada exclusivamente para Produtos Digitais é
          organizada em 6 especialidades: Product Managamenet, User Experience
          Design, SEO, Tecnologia, Agile e User Behavior Analytics.
        </P>
      </Container>

      <img src={JussiAbout} alt={"Jussi"}></img>
      <Background></Background>
    </ContainerAbout>
  );
};

export default AboutComponent;
