// REACT
import React from "react";

// STYLED COMPONENTS
import { StyledLogo } from "./logo.styles";

const Logo = ({ hover }) => (
  <StyledLogo className={`logo ${hover ? "show" : ""}`} />
);

export default Logo;
