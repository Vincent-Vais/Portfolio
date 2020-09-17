import styled from "styled-components";

import {
  VerticalColumnOneOfOne,
  HeadingTiny,
  VerticalList,
} from "../../../../general-styles/reus.general-styles";

export const LayoutFeatures = styled.div`
  ${VerticalColumnOneOfOne}
  flex: 2 1 60%;
`;

export const FeaturesHeader = styled.h4`
  ${HeadingTiny}
  flex: 1 1 10%;
`;

export const FeaturesList = styled.ul`
  ${VerticalList}
  flex: 2 1 90%;
`;
