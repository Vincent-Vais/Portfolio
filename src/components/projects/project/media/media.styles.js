import styled from "styled-components";

import {
  container,
  colors,
} from "../../../../general-styles/vars.general-styles";
import { VerticalColumnOneOfTwo } from "../../../../general-styles/reus.general-styles";
import { appear } from "../../../../general-styles/animations.general-styles";

export const LayoutMedia = styled.div`
  ${VerticalColumnOneOfTwo}

  margin: -7.5rem 2.5rem 0 0;
  box-shadow: ${container.boxShadow};
  border-radius: ${container.borderRadius};
  position: relative;

  ${appear}
`;

export const ProjectResources = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 3;
`;

export const ResourceLink = styled.a`
  opacity: 0;
  cursor: pointer;
  color: black;
  tansition: all 0.25s ease-in forwards;

  &.show {
    opacity: 0.5;
  }

  &:hover {
    opacity: 1;
    color: ${colors.primaryColor};
  }
`;
