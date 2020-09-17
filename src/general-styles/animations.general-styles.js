import { css } from "styled-components";
import { colors } from "./vars.general-styles";

// Button landing
export const scaleAndAppearLanding = css`
  animation: scale 2s cubic-bezier(0.17, 0.67, 0.86, 1.35);
  @keyframes scale {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

// Media container
export const appear = css`
  animation: appear 1s ease-in forwards;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Project scrolling
export const moveLeftStart = css`
  animation: moveLeftStart 1s ease-in forwards;
  @keyframes moveLeftStart {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50rem);
      opacity: 0;
    }
  }
`;
export const moveLeftEnd = css`
  animation: moveLeftEnd 1s ease-in forwards;
  @keyframes moveLeftEnd {
    0% {
      transform: translateX(50rem);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
export const moveRightStart = css`
  animation: moveRightStart 1s ease-in forwards;
  @keyframes moveRightStart {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(50rem);
      opacity: 0;
    }
  }
`;
export const moveRightEnd = css`
  animation: moveRightEnd 1.2s ease-in forwards;
  @keyframes moveRightEnd {
    0% {
      transform: translateX(-50rem);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const disappear = css`
  @keyframes disappear {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

// Popper sliding
export const slideUp = css`
  animation: slideUp 2s ease-in forwards;
  @keyframes slideUp {
    0% {
      transform: translateY(100rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export const slideDown = css`
  animation: slideDown 2s ease-in forwards;

  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100rem);
    }
  }
`;

// Nav rotations
export const rotateVert = css`
  animation: rotateVert 1s ease-in forwards;

  @keyframes rotateVert {
    0% {
      opacity: 0;
      transform: translate(0, -25rem);
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  width: 15vw;
  height: 100vh;
  flex-direction: column !important;
  align-items: flex-start;

  .left {
    margin-right: 0 !important;
  }

  & .logo {
    top: 50%;
    left: 30%;
    fill: ${colors.onBackground};
  }
`;
export const rotateHor = css`
  width: 100vw;
  height: 10vh;
  padding: 0 5vw;
  flex-direction: row !important;

  .left {
    margin-right: auto !important;
  }

  & .logo {
    top: 50%;
    left: 50%;
  }

  animation: rotateHor 1s ease-in forwards;

  @keyframes rotateHor {
    0% {
      opacity: 0;
      transform: translate(-25rem, 0);
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;
