// REACT
import React from "react";

// CONTEXT
import { useContext } from "react";
import { ProjectsContext } from "../../../../providers/projects/projects.provider";

// STYLED COMPONENTS
import { LayoutText } from "./text.styles";

// REACT COMPONENTS
import Name from "../name/name.component";
import Description from "../description/description.component";
import Features from "../features/features.component";

const Text = () => {
  const { currentProject } = useContext(ProjectsContext);
  const {
    text: { name, descr, features },
  } = currentProject;
  return (
    <LayoutText>
      <Name>{name}</Name>
      <Description>{descr}</Description>
      <Features features={features}></Features>
    </LayoutText>
  );
};

export default Text;
