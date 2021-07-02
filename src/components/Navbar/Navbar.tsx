/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import {
  ContainerLinks,
  ContainerLogin,
  ContainerSearch,
  Input,
  Nav,
} from "./styles";
import shoppingCart from "../../assets/icons/shopping-cart.svg";
import A from "../ui/A";
import { getProducts } from "../../services/search";
import { search } from '../../types/index';


const NavbarComponent: React.FC = () => {
  const navbarLinks = [
    { url: "https://jussi.com.br/services.html", label: "Nossas soluções" },
    { url: "https://jussi.com.br/", label: "Conheça a Jüssi" },
  ];

  const [searchValue, setSearchValue] = useState("");
  const handleKeyPress = ({ key }: search) => {
    key === "Enter" ? getProducts(searchValue) : null;
  };

  return (
    <Nav>
      {" "}
      <ContainerLinks>
        {navbarLinks &&
          navbarLinks.map((link) => (
            <A key={link.label} href={link.url}>
              {link.label}
            </A>
          ))}
      </ContainerLinks>
      <ContainerSearch>
        <Input
          type="text"
          placeholder="Buscar"
          onChange={(event: any) => setSearchValue(event.target.value)}
          onKeyPress={handleKeyPress}
        ></Input>
        <ContainerLogin>
          <A href="/">
            <div> Login</div>
          </A>
          <img src={shoppingCart} alt={"Shopping Cart - Jussi"} />
        </ContainerLogin>
      </ContainerSearch>
    </Nav>
  );
};

export default NavbarComponent;
