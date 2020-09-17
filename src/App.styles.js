import styled from "styled-components";
import { text, colors } from "./general-styles/vars.general-styles";
import Background from "./assets/pattern.dark.svg";

export const AppContainer = styled.div`
  font-size: ${text.defaultFontSize};
  font-family: "Comfortaa", cursive;
  background-color: rgba(0, 0, 0, 0.85);
  background-image: url(${Background});
  color: ${colors.onBackground};
`;
