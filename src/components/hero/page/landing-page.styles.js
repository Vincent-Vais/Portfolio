import styled from "styled-components";

export const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh 0;
  position: relative;

  &.remove {
    animation: remove 2s ease-in forwards;

    @keyframes remove {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(0, -100vh);
      }
    }
  }
`;
