import React from "react";
import CasesProducts from "../../constants/cases";

import {
  Container,
  Title,
  Box,
  Button,
  Elipse,
  NameProduct,
  DescProduct,
  List,
  Center,
} from "./styles";

//import A from "../A";

const CasesComponent: React.FC = () => {
  const Products = CasesProducts;

  return (
    <Container>
      <Title>
        <b>/ /</b>NOSSAS SOLUÇÕES
      </Title>
      <Center>
        {Object.values(Products).map((data) => {
          return (
            <Box key={data.name}>
              <Elipse>
                {data.img ? (
                  <img src={data.img} alt={data.alt}></img>
                ) : (
                  <b>{data.alt}</b>
                )}
              </Elipse>
              <NameProduct>{data.name}</NameProduct>
              <DescProduct>{data.description}</DescProduct>
              <List>{data.features}</List>
              <Button left={true}>Ver solução</Button>
            </Box>
          );
        })}
      </Center>
    </Container>
  );
};

export default CasesComponent;
