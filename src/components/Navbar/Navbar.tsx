import React from "react";
import {
  ContainerLinks,
  ContainerLogin,
  ContainerSearch,
  Input,
  Nav,
} from "./styles";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import A from "../A";

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
            <A
              key={link.label}
              href={link.url}
            >
              {link.label}
            </A>
          ))}
      </ContainerLinks>
      <ContainerSearch>
        <Input type="search" placeholder="Buscar"></Input>
        <ContainerLogin>
          <A href="/">
          <div>  Login</div>
          </A>
          <img src={shoppingCart} alt={"Shopping Cart - Jussi"} />
        </ContainerLogin>
      </ContainerSearch>
    </Nav>
  );
};

export default NavbarComponent;
