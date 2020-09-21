import styled from "styled-components";

export const LayoutVideo = styled.video`
  filter: opacity(80%);
  width: 100%;
  flex: 2 1 65%;
  object-fit: fill;
  flex: 0;

  &.hide {
    filter: blur(1px) brightness(15%);
  }
`;

export const LayoutImg = styled.img`
  filter: opacity(80%);
  width: 100%;
  flex: 2 1 65%;
  object-fit: fill;
  flex: 0;

  &.hide {
    filter: blur(1px) brightness(15%);
  }
`;
