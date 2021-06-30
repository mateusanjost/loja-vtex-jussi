import React from "react";

import { Right, Footer, Left } from "./styles";

import wppCompanyLogo1x from "../../assets/icons/wppcompany1x.svg";
import wppCompanyLogo2x from "../../assets/icons/wppcompany2x.svg";
import facebookLogo1x from "../../assets/icons/facebook1x.svg";
import facebookLogo2x from "../../assets/icons/facebook2x.svg";
import instagramLogo1x from "../../assets/icons/instagram1x.svg"
import instagramLogo2x from "../../assets/icons/instagram2x.svg";

import linkedinLogo1x from "../../assets/icons/linkedin1x.svg";
import linkedinLogo2x from "../../assets/icons/linkedin2x.svg";

const FooterComponent: React.FC = () => {

  const iconsSocialMedia = [
    { src: facebookLogo1x,  srcSet: facebookLogo2x, alt: "Facebook Logo" },
    { src: instagramLogo1x, srcSet: instagramLogo2x, alt: "Instagram Logo" },
    { src: linkedinLogo1x, srcSet: linkedinLogo2x, alt: "Linkedin Company Logo" },
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

        {iconsSocialMedia.map(icon => {
          return (
            <img
            src={icon.src}
            srcSet={`${icon.src}, ${icon.srcSet} 2x`}
            alt={icon.alt}
          />
          )
        })}
      </Right>
    </Footer>
  );
};

export default FooterComponent;
