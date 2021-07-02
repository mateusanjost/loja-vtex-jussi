import React from "react";
import {
  Introduction,
  P,
  Left,
  Rectangle,
  Right,
  Container,
  ContainerLeft,
  IntroductionTitle,
  Button
} from "./styles";
import Fridge from "../../assets/images/rectangleFridge.webp";
import Scout from "../../assets/images/rectangleScout.webp";
import Whisky from "../../assets/images/rectangleWhisky.webp";
const IntroductionComponent: React.FC = () => {
  return (
    <Introduction>
      <Left>
        <IntroductionTitle>CRIAMOS LOJAS QUE VENDEM MAIS</IntroductionTitle>
        <P>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
          Precisa criar sua loja ou migrar de plataforma?
        </P>
        <Button left={true}>Veja nossas soluções</Button>
      </Left>
      <Right>
        <ContainerLeft>
          <Rectangle left={false} backgroundImage={window.origin + Whisky}>
            <Button>Mais detalhes</Button>
          </Rectangle>
        </ContainerLeft>
        <Container>
          <Rectangle left={true} backgroundImage={window.origin + Fridge}>
            <Button>Comprar em 12x</Button>
          </Rectangle>
          <Rectangle backgroundImage={window.origin + Scout}>
            <Button>Adicionar à sacola</Button>
          </Rectangle>
        </Container>
      </Right>
    </Introduction>
  );
};

export default IntroductionComponent;
