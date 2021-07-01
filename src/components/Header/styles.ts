import styled from "styled-components";

export const Header = styled.header`
  max-height: 80px;
  display: flex;
  margin: 20px 24px;
`;

export const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;
