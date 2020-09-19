import styled from "styled-components";

// GENERAL STYLES
import { colors } from "../../../general-styles/vars.general-styles";

export const HeroContentContainer = styled.div`
  width: 100vw;
  margin-bottom: 5rem;
  height: 90vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const TyperContainer = styled.div`
  width: 60%;
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
