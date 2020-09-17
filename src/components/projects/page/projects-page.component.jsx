// REACT
import React from "react";

// STYLED COMPONENTS
import { LayoutContainer, LayoutDivider } from "./projects-page.styles";

// REACT COMPONENTS
import MainContent from "../main-content/main-content.component";

const ProjectsPage = () => {
  return (
    <LayoutContainer>
      <MainContent />
      <LayoutDivider />
    </LayoutContainer>
  );
};

export default ProjectsPage;
