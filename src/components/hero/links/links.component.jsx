// REACT
import React from "react";
import { useHistory } from "react-router-dom";

// STYLED COMPONETNS
import { HeroLinksContainer, ProjectsButton } from "./links.styles";

const Links = () => {
  let history = useHistory();

  return (
    <HeroLinksContainer>
      {/* {phase === content.end.case ? ( */}
      {/* <div> */}
      <ProjectsButton onClick={() => history.push("/projects/all")}>
        All Projects
      </ProjectsButton>
      {/* <CtaContainer>
          <p>Learn more about me</p>
          <i className="fas fa-angle-down fa-3x"></i>
        </CtaContainer> */}
      {/* </div> */}
      {/* ) : ( */}
      {/* <LinksLoader time={INROTDUCTION_TIME / 1000}></LinksLoader> */}
      {/* )} */}
    </HeroLinksContainer>
  );
};

export default Links;
