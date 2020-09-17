import styled from "styled-components";

import { ButtonPrimaryInverted } from "../../../../general-styles/reus.general-styles";
import { colors } from "../../../../general-styles/vars.general-styles";

export const LayoutTag = styled.li`
  ${ButtonPrimaryInverted}

  cursor: pointer;
  margin: 0.5rem;
  flex: 1 1 25%;

  &:hover {
    background-color: ${colors.primaryColor};
  }
`;
