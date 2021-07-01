import React from "react";
import IntroductionComponent from "../components/Introduction";
import StoresBarComponent from "../components/StoresBar";

const Home: React.FC = () => {
  return (
    <>
      <IntroductionComponent />
      <StoresBarComponent />
    </>
  );
};

export default Home;
