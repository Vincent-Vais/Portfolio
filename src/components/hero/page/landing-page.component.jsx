// REACT
import React from "react";

// STYLED COMPONENTS
import { LandingPageContainer } from "./landing-page.styles";

// REACT COMPONENTS
import Content from "../content/content.component";
import Links from "../links/links.component";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Content />
      <Links />
    </LandingPageContainer>
  );
};

export default LandingPage;
