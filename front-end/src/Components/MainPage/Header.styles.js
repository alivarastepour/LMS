import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    direction: ltr;

    .img-text-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .logo {
      width: 40px;
      height: 40px;
    }
    .text {
      font-family: "vazir", sans-serif;
      direction: rtl;
      margin-left: 10px;

      @media only screen and (max-width: 400px) {
        & {
          margin-left: 0;
          font-size: 0.75rem;
        }
      }
    }
    .logout-container {
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      font-family: "vazir", sans-serif;
      cursor: pointer;
      &:hover {
        transition: 0.4s;
        opacity: 0.5;
      }
      &:not(:hover) {
        transition: 0.4s;
        opacity: 1;
      }
      @media only screen and (max-width: 400px) {
        .exit {
          font-size: 0.75rem;
        }
      }
    }
  }
`;
