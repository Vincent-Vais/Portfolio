import styled from "styled-components";

// GENERAL STYLES
import { colors, button } from "../../../general-styles/vars.general-styles";
import { scaleAndAppearLanding } from "../../../general-styles/animations.general-styles";

export const HeroLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  text-align: center;
  margin-top: auto;
  height: 35vh;
  position: relative;
`;

export const ProjectsButton = styled.button`
  background-color: ${colors.backgroundOverlay};
  color: ${colors.onBackground};
  font-weight: 700;
  width: 20rem;
  height: 6rem;
  border-radius: 1rem;
  margin-bottom: 5rem;
  border: none;
  box-shadow: ${button.boxShadow};
  font-size: 2rem;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${button.boxShadowHover};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  ${scaleAndAppearLanding}
`;
