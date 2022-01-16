import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  background-color: #f5f5f5;
  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
  border-radius: 10px;

  @media only screen and (max-width: 695px) {
    & {
      max-width: 99%;
    }
  }
`;

export const Content = styled.div`
  max-width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  * {
    font-family: "vazir", sans-serif;
  }

  .flex-item {
    width: 350px;

    @media only screen and (max-width: 420px) {
      & {
        width: 200px;
      }
    }
  }

  .label {
    margin-top: 80px;
    direction: rtl;
    font-size: 1.4rem;

    @media only screen and (max-width: 420px) {
      & {
        margin-top: 50px;
      }
    }
  }

  .input {
    margin-top: 20px;
  }

  .submit {
    padding-top: 90px;
  }

  .inp {
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;

    @media only screen and (max-width: 420px) {
      & {
        width: 200px;
      }
    }
  }

  .button {
    width: 200px;
    height: 50px;
    margin: auto;
    display: block;
    font-size: 1.2rem;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .button:hover,
  .inp:hover {
    transition: 0.6s;
    background-color: #8b9ce8;
    color: white !important;
  }

  .inp:hover::placeholder {
    color: white;
  }

  .button:not(:hover),
  .inp:not(:hover) {
    transition: 0.4s;
    background-color: white;
  }

  .error-msg-hide {
    visibility: hidden;
  }

  .error-msg-show {
    display: block;
    visibility: visible;
    color: red;
  }

  .errorLogin {
    text-align: center;
    direction: rtl;
  }

  @media only screen and (max-width: 695px) {
    & {
      max-width: 99%;
      align-content: center;
    }
  }
`;
