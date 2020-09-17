import styled from "styled-components";

// OTHER
import { ReactComponent as LogoSvg } from "../../../assets/landing-page.logo.svg";
import { colors } from "../../../general-styles/vars.general-styles";

export const StyledLogo = styled(LogoSvg)`
  position: absolute;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
  fill: rgba(0, 0, 0, 0.8);
  z-index: 0;
  opacity: 0;
  transition: all 0.25s ease-in;

  &.show {
    opacity: 1;
  }

  &:hover {
    fill: ${colors.primaryColor};
    cursor: pointer;
  }
`;

// fill: url(#Gradient1);
