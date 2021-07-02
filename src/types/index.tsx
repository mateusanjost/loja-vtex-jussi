export type Navbar = [url: string, label: string];
export interface Rectangles {
  backgroundImage: string;
  left?: boolean;
}
export interface search {
  key: string;
}
export interface ButtonLeft {
  left?: boolean;
}

export interface mixins {
  color?: string;
  size?: string;
  family?: string;
  style?: string;
}


export type A = {
  href?: string;
  key?: string | number;
};


export type Titles = {
  children?: unknown;
  color?: string;
  fontSize?: string;
  }

  export interface Buttons  {
    border?: string;
    children?: unknown|JSX.Element|JSX.Element[];
    borderRadius?: string;
    backgroundColor?: string;
    fontSize?: string;
    left?: boolean;
  }

  export interface Image {
    src?: string;
    alt?: string;
  }