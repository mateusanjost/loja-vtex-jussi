import React from "react";

import { Container, Form, Title, Center, Input, Button } from "./styles";

const NewsletterComponent: React.FC = () => {
  return (
    <Container>
      <Center>
        <Title>receba novidades da nossa área de produtos digitais.</Title>
        <Title>
          {" "}
          <Form>
            <Input type="text" value={"Digite seu e-mail"} />
            <Button disabled>CADASTRAR</Button>
          </Form>
        </Title>
      </Center>
    </Container>
  );
};

export default NewsletterComponent;
