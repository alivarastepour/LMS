import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 60px;
  text-align: right;
  direction: rtl;
  justify-content: center;
  @media only screen and (max-width: 420px) {
    & {
      width: 70%;
      margin: auto;
    }
  }
  .flex-item {
    width: 160px;
    height: 100%;
  }

  .header-button {
    border: none;
    outline: none;
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;

    @media only screen and (max-width: 420px) {
      & {
        font-size: 1rem;
      }
    }
  }

  .show {
    background-color: #edf0ff;
  }

  .hide {
    background-color: transparent;
  }

  .header-link {
    color: black;
    text-decoration: none;
  }
`;
