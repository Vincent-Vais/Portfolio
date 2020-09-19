// REACT
import React, { useState } from "react";

// STYLED COMPONENTS
import { LayoutMedia, ProjectResources, ResourceLink } from "./media.styles";

// REACT COMPONENTS
import Video from "../video/video.component";
import Tags from "../tags/tags.component";

const Media = ({ media }) => {
  const { source, tags, github, ws } = media;

  const [hover, setHover] = useState(false);

  const resources = [
    {
      icon: "fab fa-github fa-4x",
      link: github,
    },
    {
      icon: "fas fa-caret-square-right fa-4x",
      link: ws,
    },
  ];
  return (
    <LayoutMedia
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="scalable-media-container"
      key={source}
    >
      <ProjectResources>
        {resources.map(({ icon, link }, i) => (
          <ResourceLink
            href={link}
            target="_blank"
            key={i}
            className={hover ? "show" : ""}
          >
            <i className={icon}></i>
          </ResourceLink>
        ))}
      </ProjectResources>
      <Video hover={hover} src={source} />
      <Tags tags={tags} />
    </LayoutMedia>
  );
};

export default Media;
