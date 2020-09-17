import styled from "styled-components";

import { colors } from "../../../../general-styles/vars.general-styles";
import { TextBig } from "../../../../general-styles/reus.general-styles";

export const LayoutFeature = styled.li`
  display: flex;
  align-items: center;
`;

export const Dot = styled.span`
  color: ${colors.primaryColor};
  color: black;
  width: 7.5%;
  text-align: left;
  display: inline-block;
  font-size: 2rem;
`;

export const FeatureText = styled.span`
  ${TextBig}
  width: 92.5%;
  display: inline-block;
`;
