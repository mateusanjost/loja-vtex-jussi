import React from "react";
import {
  ContainerLinks,
  ContainerLogin,
  ContainerSearch,
  Input,
  Nav,
} from "./styles";
import shoppingCart from "../../assets/icons/shopping-cart.svg";

const NavbarComponent: React.FC = () => {
  
  const navbarLinks = [
    { url: "https://jussi.com.br/services.html", label: "Nossas soluções" },
    { url: "https://jussi.com.br/", label: "Conheça a Jüssi" },
  ];

  return (
    <Nav>
      {" "}
      <ContainerLinks>
        {navbarLinks &&
          navbarLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              rel="noreferrer noopener"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
      </ContainerLinks>
      <ContainerSearch>
        <Input type="search" placeholder="Buscar"></Input>
        <ContainerLogin>
          <a href="/" target="_blank">
            Login
          </a>
          <img src={shoppingCart} alt={"Shopping Cart - Jussi"} />
        </ContainerLogin>
      </ContainerSearch>
    </Nav>
  );
};

export default NavbarComponent;
