import styled from "styled-components";

// ROUTER
import { NavLink } from "react-router-dom";

// GENERAL STYLES
import { colors } from "../../../general-styles/vars.general-styles";
import { NavigationItem } from "../../../general-styles/reus.general-styles";

export const NavLinkItem = styled(NavLink)`
  ${NavigationItem}

  opacity: 0.7;
  &.colored {
    border-bottom: 2.5px solid ${colors.primaryColor};
  }

  &.left {
    margin-right: auto;
  }

  &:hover {
    opacity: 1;
  }
`;
