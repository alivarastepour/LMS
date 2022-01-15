import styled from "styled-components";

export const Wrapper = styled.div`
  width: 600px;
  height: 650px;
  direction: rtl;
  text-align: right;
  padding-right: 30px;
  padding-left: 30px;

  @media only screen and (max-width: 675px) {
    & {
      width: 450px;
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  @media only screen and (max-width: 520px) {
    & {
      width: 250px;
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  .input,
  .select,
  .label {
    display: block;
    font-family: "vazir", sans-serif;
  }

  .input,
  .select {
    margin-top: 5px;
    height: 30px;
    font-size: 0.8rem;
  }
  .label {
    margin-top: 10px;
    font-size: 1rem;
  }

  .switch {
    display: inline-block;
  }

  .input {
    width: 100%;
    padding-right: 10px;
  }

  .button {
    float: left;
    border: none;
    outline: none;
    font-family: "vazir", sans-serif;
    margin-left: 10px;
    width: 80px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: #f8f8f8;
  }

  .acc {
    background-color: #17b327;
    color: white;
  }

  .acc:hover {
    opacity: 0.9;
  }
`;
