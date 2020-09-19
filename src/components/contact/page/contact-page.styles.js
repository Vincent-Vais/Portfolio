import styled from "styled-components";

import {
  PageLayout,
  TextMedium,
} from "../../../general-styles/reus.general-styles";
import { colors, button } from "../../../general-styles/vars.general-styles";

import { ReactComponent as CodeWars } from "../../../assets/code-wars.svg";

export const LayoutContactPage = styled.div`
  ${PageLayout}
  padding-top: 15vh;
`;

export const IconsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;

export const Icon = styled.div`
  font-size: 7.5rem;
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  &:hover {
    color: ${colors.primaryColor};
  }
`;

export const Svg = styled(CodeWars)`
  height: 75px;
  width: 75px;
  fill: ${colors.onBackground};

  &:hover {
    fill: ${colors.primaryColor};
  }
`;

export const Form = styled.form`
  width: 80%;
  display: grid;
`;

export const Row = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  &:nth-of-type(1) {
    grid-row: 1;
  }
  &:nth-of-type(2) {
    grid-row: 2;
  }
  &:nth-of-type(3) {
    grid-row: 3;
  }
`;

export const FormGroup = styled.div`
  width: 47.5%;
  height: 5rem;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  left: 2rem;
  transform: translate(-50%, -50%);
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 20vh;
  padding: 2.5rem;
`;

export const SubmitBtn = styled.button`
  background-color: ${colors.backgroundOverlay};
  color: ${colors.onBackground};
  font-weight: 700;
  width: 20rem;
  height: 6rem;
  border-radius: 1rem;
  border: none;
  box-shadow: ${button.boxShadow};
  font-size: 2rem;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${button.boxShadowHover};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const Footer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;
`;

export const Text = styled.p`
  ${TextMedium}
  width: 75%;
  text-align: justify;
`;

export const InlineLink = styled.a`
  color: ${colors.primaryColor};
  display: inline-block;
  padding: 0 0.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
    box-shadow: ${button.boxShadow};
    transform: rotate(-15deg);
  }
`;
