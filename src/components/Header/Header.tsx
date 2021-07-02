import React from "react";
import { Header, HeaderLeft } from "./styles";
import jussiLogo from "../../assets/icons/logoJussiVectorGreen.svg";
import NavbarComponent from "../Navbar";

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <HeaderLeft>
        <img src={jussiLogo} alt="Logo Jüssi - The Business Agency" />
      </HeaderLeft>
      <NavbarComponent />
    </Header>
  );
};

export default HeaderComponent;
