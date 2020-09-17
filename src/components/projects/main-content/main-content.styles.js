import styled from "styled-components";

import { colors, button } from "../../../general-styles/vars.general-styles";

export const LayoutMain = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-contetn: center;
  align-items: center;
  transition: opacity 1s ease-in;
  opacity: 0;

  &.hidden {
    opacity: 0;
  }
  &.appear {
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  height: 15rem;
`;

export const Button = styled.button`
  background: transparent;
  padding: 1.5rem 3rem;
  border: 2px solid ${colors.backgroundColor};
  color: ${colors.onBackground};
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  word-spacing: 2.25px;
  border-radius: 10px;
  box-shadow: ${button.boxShadow};
  font-family: "Comfortaa", cursive;
  text-transform: uppercase;

  &:hover {
    box-shadow: ${button.boxShadowHover};
    transform: translateY(-4px);
  }

  &:active,
  &:target {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  opacity: 0.5;
  z-index: 1;

  &.left {
    left: 5%;
    transform: translate(-50%, -50%);
  }
  &.right {
    right: 5%;
    transform: translate(50%, -50%);
  }

  &:hover {
    color: black;
    cursor: pointer;
  }
`;
