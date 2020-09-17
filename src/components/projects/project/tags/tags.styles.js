import styled from "styled-components";

import { colors } from "../../../../general-styles/vars.general-styles";
import { HorizontalList } from "../../../../general-styles/reus.general-styles";

export const TagsList = styled.ul`
  ${HorizontalList}

  flex: 1 1 35%;
  padding: 2rem 0;
  background: ${colors.backgroundOverlay};
`;
