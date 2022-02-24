import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 100px;

  .bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(
      -60deg,
      rgba(45, 116, 213, 1) 50%,
      rgba(121, 137, 212, 1) 50%
    );
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
  }

  .bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 4s;
  }

  .bg3 {
    animation-duration: 5s;
  }

  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;
