import styled from "styled-components";

import { colors } from "../../../general-styles/vars.general-styles";

export const LayoutPopper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colors.backgroundColor};
  z-index: 2;
  overflow-y: scroll;
  ${({ animation }) => animation}

  & .opaque {
    transition: opacity 0.5s ease-in;
    opacity: 0;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 2.5%;
  transform: translate(-50%, -50%);

  &:hover {
    color: ${colors.primaryColor};
    cursor: pointer;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  width: 70%;
  height: auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 15vw;

  & > * {
    margin: 2.5rem;
    flex: 0 1 35%;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 6vh;
  margin: 5vh 0 2.5vh 15vw;
  opacity: 0.85;
  background: ${colors.onBackground};
`;
