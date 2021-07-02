import React from "react";
import { Buttons } from "../../../types";
import { Button } from "./styles";


const ButtonComponent: React.FC<Buttons> = (
  props: React.AllHTMLAttributes<HTMLButtonElement | any>
) => {
  const { children} = props;
  return (
    <Button>
     {children}
    </Button>
  );
};

export default ButtonComponent;
