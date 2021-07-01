import React, { Key } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

type A = {
  href?: string;
  key?: Key;
};

const AComponent: React.FC<A> = (
  props: React.AllHTMLAttributes<HTMLAnchorElement | A>
) => {
  const { href, children, ...rest } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Router>
      <Link to={href as string}>
        <a {...rest}>{children}</a>
      </Link>
      </Router>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  );
};

export default AComponent;
