// REACT
import React from "react";

// STYLED COMPONENTS
import {
  HeroContentContainer,
  TyperContainer,
  TypedText,
} from "./content.styles";

const Content = () => (
  <HeroContentContainer>
    <TyperContainer>
      <TypedText>
        Hello, Nice to meet You! My name is Vincent. I am a FullStack Web
        Developer. I build <span className="color">reactive</span> single-page
        applications &<span className="color"> awe - inspiring </span>
        interfaces
      </TypedText>
    </TyperContainer>
  </HeroContentContainer>
);

export default Content;
