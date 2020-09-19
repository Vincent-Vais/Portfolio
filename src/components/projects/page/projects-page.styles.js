import styled from "styled-components";

import { PageLayout } from "../../../general-styles/reus.general-styles";
import { colors } from "../../../general-styles/vars.general-styles";

export const LayoutContainer = styled.div`
  ${PageLayout}
  overflow: hidden !important;
  padding: 5vh 2.5vw;
`;

export const LayoutDivider = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100vw;
  height: 57.5vh;
  background-color: ${colors.backgroundOverlay};
  z-index: -1;
`;
