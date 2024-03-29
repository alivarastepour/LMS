import styled from "styled-components";

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
    margin-top: 25px;
    direction: rtl;
    font-size: 1.4rem;
    @media only screen and (max-width: 460px) {
      & {
        margin-top: 10px;
        padding-right: 20px;
      }
    }
    @media only screen and (max-width: 420px) {
      & {
        padding-right: 0;
        margin-top: 5px;
      }
    }
  }

  .input {
    margin-top: 5px;
    @media only screen and (max-width: 460px) {
      & {
        width: 250px;
        margin: auto;
      }
    }
    @media only screen and (max-width: 420px) {
      & {
        width: 200px;
        margin: auto;
      }
    }
  }

  .submit {
    padding-top: 25px;
  }

  .inp {
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    @media only screen and (max-width: 460px) {
      & {
        margin-top: 0;
        width: 250px;
      }
    }
    @media only screen and (max-width: 420px) {
      & {
        margin-top: 10px;
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
  }

  .inp:hover::placeholder {
    color: white;
  }

  .button:not(:hover),
  .inp:not(:hover) {
    transition: 0.4s;
    background-color: white;
  }

  .select {
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1rem;
    text-align: center;
    background-color: #fff;
    @media only screen and (max-width: 460px) {
      & {
        width: 250px;
      }
    }
    @media only screen and (max-width: 420px) {
      & {
        width: 200px;
      }
    }
  }

  .error {
    border: 2px #780585 solid;
    animation: fade 5s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .error-msg-show {
    visibility: visible;
    color: red;

    @media only screen and (max-width: 420px) {
      & {
        font-size: 0.7rem;
      }
    }
  }

  .error-msg-hide {
    visibility: hidden;
  }

  .errorSignup {
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
