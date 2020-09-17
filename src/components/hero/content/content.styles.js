import styled from "styled-components";

// GENERAL STYLES
import { colors } from "../../../general-styles/vars.general-styles";

export const HeroContentContainer = styled.div`
  width: 100vw;
  margin-bottom: 5rem;
  height: 90vh;
  position: relative;
`;

export const TyperContainer = styled.div`
  width: 60vw;
  height: 20vh;
  text-align: left;
  margin-bottom: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: justify;
`;

export const TypedText = styled.span`
  display: inline;
  font-size: 4rem;
  line-height: 1.4;

  & .color {
    color: ${colors.primaryColor};
  }
`;
