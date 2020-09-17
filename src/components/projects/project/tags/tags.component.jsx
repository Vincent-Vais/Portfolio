// REACT
import React from "react";

// STYLED COMPONENTS
import { TagsList } from "./tags.styles";

// REACT COMPONENTS
import Tag from "../tag/tag.component";

const Tags = ({ tags }) => (
  <TagsList>
    {tags.map((tag, index) => (
      <Tag key={index}>{tag}</Tag>
    ))}
  </TagsList>
);

export default Tags;
