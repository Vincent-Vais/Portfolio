import React from "react";

import { LayoutFeature, Dot, FeatureText } from "./feature-item.styles";
const FeatureItem = ({ children }) => (
  <LayoutFeature>
    <Dot>
      <i className="fas fa-dot-circle"></i>
    </Dot>
    <FeatureText>{children}</FeatureText>
  </LayoutFeature>
);

export default FeatureItem;
