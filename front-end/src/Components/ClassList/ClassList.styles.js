import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .flex-header {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-top: 10px;
    direction: rtl;
  }
  .flex-item {
    margin-top: 5px;
  }

  .table {
    width: 100%;
    direction: rtl;
    font-family: "vazir", sans-serif;
    text-align: center;
    border-collapse: collapse;
  }

  .header {
    font-size: 1.4rem;

    @media only screen and (max-width: 920px) {
      & {
        font-size: 1.1rem;
      }
    }
  }

  tr {
    height: 60px;
  }

  .hover:hover {
    transition: 0.2s;
    background-color: #f8f8f8;
  }

  td {
    border-bottom: 1px #f0f0f0 solid;
    padding-top: 10px;
    font-size: 1.2rem;
  }

  .input {
    outline: none;
    border: none;
    width: 300px;
    height: 41px;
    border-radius: 12px;
    padding-right: 10px;
    padding-left: 10px;
    color: black;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    border: 1px solid #f0f0f0;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    &::placeholder {
      font-size: 0.9rem;
    }
    &:hover {
      outline: 1px black solid;
    }

    @media only screen and (max-width: 460px) {
      & {
        font-size: 1rem;
      }
    }
  }

  .button {
    width: 100px;
    height: 40px;
    background-color: white;
    outline: none;
    border: none;
    font-family: "vazir", sans-serif;
    border-radius: 10px;
    border: 1px solid #f0f0f0;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    &:hover {
      transition: 0.4s;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    &:not(:hover) {
      transition: 0.4s;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
        rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }
  }

  .button-table {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: "vazir", sans-serif;
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .rem {
    color: #ff5c5c;
  }
  .rem:hover {
    color: white;
    background-color: #ff5c5c;
    transition: 0.5s;
  }
  .rem:not(:hover) {
    color: #ff5c5c;
    background-color: transparent;
    transition: 0.5s;
  }
`;
