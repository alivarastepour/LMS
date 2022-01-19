import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  direction: rtl;
  text-align: right;
  align-content: center;
  justify-content: space-around;

  .image {
    text-align: center;
  }

  input[type="file"] {
    display: none;
  }

  img {
    width: 350px;
    height: 350px;
    display: block;
    margin-bottom: 10px;
    border-radius: 50%;

    @media only screen and (max-width: 1000px) {
      height: 200px;
      width: 200px;
      margin: auto;
      margin-bottom: 40px;
      margin-top: 20px;
    }
  }
  .label {
    font-family: "vazir", sans-serif;
    font-size: 1.4rem;
  }
  .content {
    font-size: 1.3rem;
    padding-top: 20px;
  }
  .button {
    font-family: "vazir", sans-serif;
    width: 200px;
    height: 50px;
    margin: auto;
    display: block;
    font-size: 1.2rem;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  }
  .button:hover {
    transition: 0.6s;
    background-color: #8b9ce8;
    color: white;
  }

  .button:not(:hover) {
    transition: 0.4s;
    background-color: white;
  }

  .change {
    margin-top: 40px;
  }

  input {
    font-family: "vazir", sans-serif;
    width: 300px !important;
    text-align: right;
  }
  input::placeholder {
    text-align: right;
  }
`;
