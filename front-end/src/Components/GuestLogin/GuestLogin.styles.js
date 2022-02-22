import styled from "styled-components";

export const Wrapper = styled.div`
  direction: rtl;
  width: 40%;
  height: 100%;
  margin: 300px auto 400px auto;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 80px;
  @media only screen and (max-width: 1030px) {
    & {
      width: 95%;
    }
  }
  @media only screen and (max-width: 430px) {
    & {
      border-radius: 10px;
    }
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .headerBox {
    margin-bottom: 50px;
    margin-right: 50px;
    font-family: "vazir", sans-serif;
    @media only screen and (max-width: 1240px) {
      & {
        display: flex;
        justify-content: center;
        margin-right: 0;
      }
    }
    @media only screen and (max-width: 430px) {
      & {
        font-size: 1.3rem;
      }
    }
  }
  .input {
    width: 400px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    border: none;
    text-align: center;
    font-size: 1.1rem;
    font-family: "vazir", sans-serif;
    @media only screen and (max-width: 430px) {
      & {
        border-radius: 5px;
        width: 280px;
      }
    }
  }

  .button {
    width: 140px;
    height: 40px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    border: 2px solid white;
    outline: none;
    border-radius: 10px;
    font-family: "vazir", sans-serif;

    @media only screen and (max-width: 1350px) {
      & {
        margin-top: 50px;
      }
    }
    @media only screen and (max-width: 1030px) {
      & {
        margin-top: 0;
      }
    }
    @media only screen and (max-width: 568px) {
      & {
        margin-top: 50px;
      }
    }

    &:hover {
      transition: 0.4s;
      border: transparent;
      background-color: white;
      color: #8b9ce8;
    }
    &:not(:hover) {
      transition: 0.4s;
      border: 2px solid white;
      background-color: transparent;
      color: white;
    }
  }
`;

export const Content = styled.div`
  .message {
    font-family: "vazir";
    direction: rtl;
  }
`;
