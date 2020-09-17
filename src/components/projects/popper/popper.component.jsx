// REACT
import React, { useContext, useState, useEffect } from "react";

// CONTEXT
import { ProjectsContext } from "../../../providers/projects/projects.provider";

// ROUTER DOM
import { useHistory } from "react-router-dom";

// STYLED CONPONENTS
import {
  LayoutPopper,
  IconContainer,
  MediaContainer,
  Input,
} from "./popper.styles";

// REACT COMPONENTS
import Media from "../project/media/media.component";

export const Popper = () => {
  const {
    animations: { popperSlide },
    projects,
    searchField,
    changeSearchField,
  } = useContext(ProjectsContext);

  const [input, setInput] = useState(searchField);
  const [opaque, setOpaque] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setInput(searchField);
  }, [searchField]);

  const filteredProjects = projects.filter(({ media: { tags } }) =>
    tags.some((tag) => tag.toLowerCase().includes(input.toLowerCase()))
  );

  const handleClick = () => {
    changeSearchField("");
    setOpaque(true);
    window.setTimeout(() => {
      history.push("/projects");
    }, 500);
  };
  return (
    <LayoutPopper animation={popperSlide}>
      <IconContainer onClick={handleClick}>
        <i className="fas fa-times fa-3x"></i>
      </IconContainer>
      <Input
        className={opaque ? "opaque" : ""}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <MediaContainer className={opaque ? "opaque" : ""}>
        {filteredProjects.map(({ media }, idx) => (
          <Media key={idx} media={media} />
        ))}
      </MediaContainer>
    </LayoutPopper>
  );
};

export default Popper;
