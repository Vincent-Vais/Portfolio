// REACT
import React, { useContext, useState } from "react";

// CONTEXT
import { ProjectsContext } from "../../../providers/projects/projects.provider";

// ROUTER DOM
import { useHistory, useLocation } from "react-router-dom";

// STYLED COMPONENTS
import {
  LayoutMain,
  ButtonContainer,
  Button,
  ArrowContainer,
} from "./main-content.styles";

// REACT COMPONENTS
import Carousel from "../carousel/carousell.component";

// ANIMATIONS
import {
  moveLeftStart,
  moveLeftEnd,
  moveRightStart,
  moveRightEnd,
} from "../../../general-styles/animations.general-styles";

const MainContent = () => {
  const { nextProject, prevProject } = useContext(ProjectsContext);
  const [animation, setAnimation] = useState("");
  const history = useHistory();
  const { pathname } = useLocation();

  const scrollLeft = () => {
    setAnimation(moveLeftStart);
    window.setTimeout(() => {
      nextProject();
      setAnimation(moveLeftEnd);
    }, 800);
  };
  const scrollRight = () => {
    setAnimation(moveRightStart);
    window.setTimeout(() => {
      prevProject();
      setAnimation(moveRightEnd);
    }, 800);
  };
  const directions = [
    { name: "left", action: scrollLeft },
    { name: "right", action: scrollRight },
  ];
  return (
    <LayoutMain className={pathname === "/projects/all" ? "hidden" : "appear"}>
      {directions.map(({ name, action }) => (
        <ArrowContainer key={name} className={name} onClick={action}>
          <i className={`fas fa-chevron-circle-${name} fa-4x`}></i>
        </ArrowContainer>
      ))}
      <Carousel scroll={animation} />
      <ButtonContainer>
        <Button onClick={() => history.push("/projects/all")}>
          All Projects
        </Button>
      </ButtonContainer>
    </LayoutMain>
  );
};

export default MainContent;
