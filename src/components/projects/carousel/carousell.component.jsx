// REACT
import React from "react";

// CONTEXT
import { useContext } from "react";
import { ProjectsContext } from "../../../providers/projects/projects.provider";

// STYLED COMPONENTS
import { LayoutCarousel, BlankPopper } from "./carousel.styles";

// REACT COMPONENTS
import Media from "../project/media/media.component";
import Text from "../project/text/text.component";

const Carousel = ({ scroll }) => {
  const {
    animations: { popperSlide },
    currentProject,
  } = useContext(ProjectsContext);
  return (
    <LayoutCarousel className="scalable-project-container" animation={scroll}>
      <BlankPopper animation={popperSlide} />
      <Media media={currentProject.media} />
      <Text />
    </LayoutCarousel>
  );
};

export default Carousel;
