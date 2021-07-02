import styled from "styled-components";
import { autoLayout } from "../../styles/mixins";

export const ContainerAbout = styled(autoLayout)`
  width: 100%;
  display: flex;
  background: #fff;
  height: 557px;
  justify-content: center;
  flex-direction: row;
  img {
    max-width: 100%;
    width: 676px;
    height: 520px;
    order: 3;
    z-index: 5;
    position: relative;
  }
`;

export const Title = styled.div`
  font-family: Barlow;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  width: 50%;
`;

export const P = styled.p`
  max-width: 50%;
  min-width: 241px;
`;

export const Container = styled(autoLayout)`
  & {
    width: 25%;
    order: 1;
  }
`;

export const Left = styled(autoLayout)``;

export const Background = styled.div`
  background: #f2f2f2;
  width: 30%;
  height: 557px;
  order: 4;
  position: absolute;
  right: 0;
  width: 50%;
`;
