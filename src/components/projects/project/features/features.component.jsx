import React from "react";

import {
  LayoutFeatures,
  FeaturesHeader,
  FeaturesList,
} from "./features.styles";

import FeatureItem from "../feature-item/feature-item.component";

const Features = ({ features }) => {
  return (
    <LayoutFeatures>
      <FeaturesHeader>Key Features</FeaturesHeader>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeaturesList>
    </LayoutFeatures>
  );
};
export default Features;
