// REACT
import React from "react";

// STYLED COMPONENTS
import { LayoutVideo } from "./video.styles";

// Videos
import clothing from "../../../../assets/clothing.mp4";
import yelp from "../../../../assets/yelp.mp4";
import warbler from "../../../../assets/warbler.mp4";
import citizy from "../../../../assets/citizy.mp4";
import forkify from "../../../../assets/forkify.mp4";

const VIDEOS = {
  clothing,
  yelp,
  warbler,
  citizy,
  forkify,
};

const Video = ({ src, hover }) => (
  <LayoutVideo key={src} className={hover ? "hide" : ""} loop muted autoPlay>
    {src ? (
      <source src={VIDEOS[src]} type="video/mp4" />
    ) : (
      "Video is not supported"
    )}
  </LayoutVideo>
);

export default Video;
