import styled from "styled-components";

// ROUTER
import { NavLink } from "react-router-dom";

// GENERAL STYLES
import { colors } from "../../general-styles/vars.general-styles";

export const LayoutNavigation = styled.div`
  margin-bottom: auto;
  position: relative;
  z-index: 3;
  width: auto;
  height: auto;
`;

export const NavigationList = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  ${({ animation }) => animation}
`;

export const ZoomOutMenu = styled(NavLink)`
  position: absolute;
  top: 90vh;
  right: 0;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  transition: all 0.25s ease-in;

  &:hover {
    cursor: pointer;
    color: ${colors.primaryColor};
    opacity: 1;
  }
`;
