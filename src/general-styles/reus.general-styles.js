import { css } from "styled-components";

import { colors } from "./vars.general-styles";
// Layout
export const PageLayout = css`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VerticalColumnOneOfTwo = css`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const VerticalColumnOneOfOne = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const VerticalList = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HorizontalList = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const NavigationItem = css`
  padding: 2.5rem 1rem 1.5rem 1rem;
  font-size: 2rem;
  border-bottom: 2.5px solid transparent;
  margin: 1rem;
`;

// Text
export const HeadingSmall = css`
  font-family: "Kaushan Script", cursive;
  font-size: 2rem;
`;

export const HeadingTiny = css`
  text-align: left;
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
`;

export const TextMedium = css`
  font-family: "Lato", sans-serif;
  font-size: 1.8rem;
  text-align: justify;
  font-weight: 300;
  letter-spacing: 1.5px;
  word-spacing: 2.25px;
`;

export const TextBig = css`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 2rem;
`;

export const TextHuge = css`
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 3.25rem;
`;

// Buttons
export const ButtonPrimaryInverted = css`
  text-align: center;
  padding: 1rem 2rem;
  border: 1px solid ${colors.primaryColor};
  border-radius: 1000px;
`;
