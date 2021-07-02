import React from "react";

import { Container, P, Title, Center } from "./styles";

import A from "../ui/A";

const ContactInfoComponent: React.FC = () => {
  return (
    <Container>
      <Center>
        <Title>
          Essa loja foi construída usando uma das nossas soluções da plataforma
          VTEX. tenha a sua.
        </Title>
        <Title>
          {" "}
          <P>Entre em contato</P>
          <A href={"mailto:comercial@jussi.com.br"}>comercial@jussi.com.br</A>
        </Title>
      </Center>
    </Container>
  );
};

export default ContactInfoComponent;
