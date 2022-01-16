import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 300px;
  height: 50px;

  .input {
    outline: none;
    border: none;
    width: 250px;
    height: 40px;
    text-align: center;
    border-radius: 10px;
  }

  .input:hover {
    transition: 0.6s;
    background-color: #8b9ce8;
    color: white !important;
  }

  .input:hover::placeholder {
    color: white;
  }

  .input:not(:hover) {
    transition: 0.4s;
    background-color: white;
  }

  .content {
    display: inline-block;
    width: 450px;
    height: 40px;
    direction: rtl;
    text-align: right;
    font-size: 1.2rem;
    font-family: "vazir", sans-serif;
    color: #50a0de;

    @media only screen and (max-width: 1375px) {
      & {
        width: 350px;
      }
    }
  }
`;
