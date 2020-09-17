import styled from "styled-components";

import { colors, container } from "../../../general-styles/vars.general-styles";

export const LayoutCarousel = styled.div`
  width: 90%;
  padding: 5rem;
  border-radius: ${container.borderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  margin: 0 auto;

  ${({ animation }) => animation};
`;

export const BlankPopper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.backgroundOverlay};

  ${({ animation }) => animation}
`;
