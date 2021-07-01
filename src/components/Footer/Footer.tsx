import React from "react";

import { Right, Footer, Left } from "./styles";

import wppCompanyLogo1x from "../../assets/icons/wppcompany1x.svg";
import wppCompanyLogo2x from "../../assets/icons/wppcompany2x.svg";
import facebookLogo1x from "../../assets/icons/facebook1x.svg";
import facebookLogo2x from "../../assets/icons/facebook2x.svg";
import instagramLogo1x from "../../assets/icons/instagram1x.svg";
import instagramLogo2x from "../../assets/icons/instagram2x.svg";

import linkedinLogo1x from "../../assets/icons/linkedin1x.svg";
import linkedinLogo2x from "../../assets/icons/linkedin2x.svg";
import A from "../A";

const FooterComponent: React.FC = () => {
  const iconsSocialMedia = [
    {
      src: facebookLogo1x,
      srcSet: facebookLogo2x,
      alt: "Facebook Logo",
      link: "https://www.facebook.com/agencia.jussi/",
    },
    {
      src: instagramLogo1x,
      srcSet: instagramLogo2x,
      alt: "Instagram Logo",
      link: "https://www.instagram.com/jussi/",
    },
    {
      src: linkedinLogo1x,
      srcSet: linkedinLogo2x,
      alt: "Linkedin Company Logo",
      link: "https://www.linkedin.com/company/agencia-jussi",
    },
  ];

  return (
    <Footer>
      <Left>
        <img
          src={wppCompanyLogo1x}
          srcSet={`${wppCompanyLogo1x}, ${wppCompanyLogo2x} 2x`}
          alt="WPP Company logo"
        />
      </Left>
      <Right>
        {iconsSocialMedia.map((icon, index) => {
          return (
            <A href={icon.link} key={index.toString()}>
            <img
              src={icon.src}
              
              srcSet={`${icon.src}, ${icon.srcSet} 2x`}
              alt={icon.alt}
            />
            </A>
          )
        })
      }
      </Right>
    </Footer>
  );
};

export default FooterComponent;
