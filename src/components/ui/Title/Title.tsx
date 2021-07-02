import React from "react";
import { Titles } from "../../../types";


const TitleComponent: React.FC<Titles> = (
  props: React.AllHTMLAttributes<Titles>
) => {
  const { children, ...rest } = props;
  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default TitleComponent;
