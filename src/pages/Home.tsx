import React from "react";
import AboutComponent from "../components/About";
import CasesComponent from "../components/Cases";
import ContactInfoComponent from "../components/ContactInfo";
import IntroductionComponent from "../components/Introduction";
import StoresBarComponent from "../components/StoresBar";

const Home: React.FC = () => {
  return (
    <>
      <IntroductionComponent />
      <StoresBarComponent />
      <CasesComponent />
      <AboutComponent />
      <ContactInfoComponent />
    </>
  );
};

export default Home;
