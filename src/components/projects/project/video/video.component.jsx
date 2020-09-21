// REACT
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

// STYLED COMPONENTS
import { LayoutVideo, LayoutImg } from "./video.styles";

// Videos
import clothing from "../../../../assets/clothing.mp4";
import yelp from "../../../../assets/yelp.mp4";
import warbler from "../../../../assets/warbler.mp4";
import citizy from "../../../../assets/citizy.mp4";
import forkify from "../../../../assets/forkify.mp4";
import slack from "../../../../assets/slack.mp4";

// Images
import clothingImg from "../../../../assets/clothing-img.png";
import yelpImg from "../../../../assets/yelp-img.png";
import warblerImg from "../../../../assets/warbler-img.png";
import citizyImg from "../../../../assets/citizy-img.png";
import forkifyImg from "../../../../assets/forkify-img.png";
import slackImg from "../../../../assets/slack-img.png";

const VIDEOS = {
  clothing,
  yelp,
  warbler,
  citizy,
  forkify,
  slack,
};

const IMAGES = {
  clothingImg,
  yelpImg,
  warblerImg,
  citizyImg,
  forkifyImg,
  slackImg,
};

const Video = ({ srcVideo, srcImage, hover }) => (
  <React.Fragment>
    <BrowserView>
      <LayoutVideo
        key={srcVideo}
        className={hover ? "hide" : ""}
        loop
        muted
        autoPlay
      >
        {srcVideo ? (
          <source src={VIDEOS[srcVideo]} type="video/mp4" />
        ) : (
          "Video is not supported"
        )}
      </LayoutVideo>
    </BrowserView>
    <MobileView>
      <LayoutImg
        src={IMAGES[srcImage]}
        key={srcImage}
        className={hover ? "hide" : ""}
      />
    </MobileView>
  </React.Fragment>
);

export default Video;
