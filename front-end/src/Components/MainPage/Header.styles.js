import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  top: 0;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  .img-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 400px;
    @media only screen and (max-width: 875px) {
      & {
        margin-left: 0;
        justify-content: center;
      }
    }
    @media only screen and (max-width: 490px) {
      & {
      }
    }
    .logo {
      width: 50px;
      height: 50px;
    }
    .text {
      font-family: "vazir", sans-serif;
      font-size: 1.5rem;
      direction: rtl;
      margin-left: 10px;
      color: #8b9ce8;
      @media only screen and (max-width: 490px) {
        & {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
