import styled from "styled-components";

import {
  PageLayout,
  TextHuge,
} from "../../../general-styles/reus.general-styles";
import { colors, container } from "../../../general-styles/vars.general-styles";

export const LayoutPageSkills = styled.div`
  ${PageLayout}
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Segment = styled.div`
  width: 80%;
  height: 100%;
  background: ${colors.backgroundOverlay};
  border-radius: ${container.borderRadius};
  box-shadow: ${container.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  max-width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const Item = styled.li`
  ${TextHuge}
  margin: 2rem 0;
  display: flex;
`;

export const SideMenu = styled.div`
  height: 100%;
  width: 20%;
  background: rgba(0, 0, 0, 0.85);
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  width: 100%;
  ${TextHuge}
  font-size: 3rem;
  padding: 5rem 0;
  border: 2.5px solid black;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: rgba(0, 0, 0, 0.75);
  }

  &.active {
    border-bottom: 2.5px solid ${colors.primaryColor};
  }
`;
