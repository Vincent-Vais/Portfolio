// REACT
import React from "react";

// ROUTER
import { useHistory, useLocation } from "react-router-dom";

// CONTEXT
import { useContext } from "react";
import { ProjectsContext } from "../../../../providers/projects/projects.provider";

// STYLED COMPONENTS
import { LayoutTag } from "./tag.styles";

const Tag = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const { changeSearchField } = useContext(ProjectsContext);

  const searchForTag = () => {
    if (location.pathname !== "/projects/all") {
      history.push("/projects/all");
    }
    changeSearchField(children);
  };
  return (
    <LayoutTag onClick={searchForTag} className="scalable-tag">
      {children}
    </LayoutTag>
  );
};

export default Tag;
