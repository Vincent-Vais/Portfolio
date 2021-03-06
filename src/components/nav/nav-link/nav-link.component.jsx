// REACT
import React from "react";

// STYLED COMPONENTS
import { NavLinkItem } from "./nav-link.styles";

const NavLink = ({ children, ...otherProps }) => {
  return (
    <NavLinkItem
      className="scalable-link-item"
      {...otherProps}
      activeClassName="colored"
    >
      {children}
    </NavLinkItem>
  );
};

export default NavLink;
