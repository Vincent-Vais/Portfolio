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
      <SideMenu>
        <MenuList>
          {Object.entries(topics).map(([key, val]) => (
            <MenuItem
              key={key}
              onClick={() => setTopic(key)}
              className={key === topic ? "active" : ""}
            >
              {key}
            </MenuItem>
          ))}
        </MenuList>
      </SideMenu>
      <Segment>
        <List>
          {currentTopic.map((item, i) => (
            <Item key={i}>{item.name}</Item>
          ))}
        </List>
      </Segment>
    </LayoutPageSkills>
  );
};
export default SkillsPage;
