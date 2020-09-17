import React, { createContext, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

import { projectData, INIT_DATA, NUM_OF_PROJECTS } from "./projects.data";

import ANIMATIONS from "./projects.animations";
import {
  slideUp,
  slideDown,
  rotateVert,
} from "../../general-styles/animations.general-styles";

export const ProjectsContext = createContext({
  projects: [],
  currentProject: INIT_DATA,
  nextProject: () => {},
  prevProject: () => {},
  animations: ANIMATIONS,
  searchField: "",
  changeSearchField: () => {},
});

export const ProjectsProvider = ({ children }) => {
  // MAIN APPLICATION FLOW + PROJECTS
  const [animations, setAnimations] = useState(ANIMATIONS);
  const [projects, setProjects] = useState([]);

  const [searchField, setSearchField] = useState("");
  const changeSearchField = (text) => setSearchField(text);

  let location = useLocation();

  const projectsPage = useCallback(() => {
    setAnimations({ ...ANIMATIONS, popperSlide: slideDown });
  }, []);
  const projectsAll = useCallback(() => {
    setAnimations({
      ...ANIMATIONS,
      popperSlide: slideUp,
      navRotate: rotateVert,
    });
  }, []);
  useEffect(() => {
    switch (location.pathname) {
      case "/projects":
      case "/skills":
      case "/welcome":
      case "/contact":
        return projectsPage();
      case "/projects/all":
        setProjects(projectData);
        return projectsAll();
      default:
        return;
    }
  }, [location, projectsPage, projectsAll]);

  // PROJECT SCROLLING
  const [currentProject, setCurrentProject] = useState(INIT_DATA);
  const [idx, setIdx] = useState(0);

  const nextProject = () => {
    setIdx((idx + 1) % NUM_OF_PROJECTS);
  };
  const prevProject = () => {
    if (!idx) setIdx(NUM_OF_PROJECTS - 1);
    else setIdx(idx - 1);
  };
  useEffect(() => {
    setCurrentProject(projectData[idx]);
  }, [idx]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        currentProject,
        animations,
        nextProject,
        prevProject,
        searchField,
        changeSearchField,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
