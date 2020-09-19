import React, { useState } from "react";

import {
  LayoutPageSkills,
  Segment,
  List,
  Item,
  SideMenu,
  MenuList,
  MenuItem,
} from "./skills-page.styles";

import topics from "./skills-page.content";

const SkillsPage = () => {
  const [topic, setTopic] = useState("frontend");
  const currentTopic = topics[topic];
  return (
    <LayoutPageSkills>
      <SideMenu className="scalable-side-menu">
        <MenuList>
          {Object.entries(topics).map(([key, val]) => (
            <MenuItem
              key={key}
              onClick={() => setTopic(key)}
              className={`scalable-menu-item ${key === topic ? "active" : ""}`}
            >
              {key}
            </MenuItem>
          ))}
        </MenuList>
      </SideMenu>
      <Segment className="scalable-segment">
        <List className="scalable-grid">
          {currentTopic.map((item, i) => (
            <Item key={i} className="scalable-item">
              {item.name}
            </Item>
          ))}
        </List>
      </Segment>
    </LayoutPageSkills>
  );
};
export default SkillsPage;
