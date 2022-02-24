import styled from "styled-components";

export const Wrapper = styled.div`
  .flex-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-top: 20px;
    direction: rtl;
    text-align: right;
  }
  table {
    width: 100%;
    direction: rtl;
    font-family: "vazir", sans-serif;
    text-align: center;
    border-collapse: collapse;

    tr {
      height: 60px;
    }

    td {
      border-bottom: 1px #f0f0f0 solid;
      padding-top: 10px;
      font-size: 1.2rem;

      @media only screen and (max-width: 920px) {
        & {
          font-size: 1rem;
        }
      }
    }

    .hover:hover {
      transition: 0.2s;
      background-color: #f8f8f8;
    }

    .header {
      font-size: 1.5rem;

      @media only screen and (max-width: 920px) {
        & {
          font-size: 1.3rem;
        }
      }
    }
    .button {
      font-family: "vazir", sans-serif;
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: transparent;
      cursor: pointer;
      font-size: 1rem;
      width: 80px;
      height: 30px;
    }
    .acc {
      color: #17b327;
      &:hover {
        transition: 0.4s;
        color: white;
        background-color: #17b327;
      }
      &:not(:hover) {
        transition: 0.4s;
        color: #17b327;
        background-color: white;
      }
    }
    .rem {
      color: #ff5c5c;
      &:hover {
        transition: 0.4s;
        color: white;
        background-color: #ff5c5c;
      }
      &:not(:hover) {
        transition: 0.4s;
        color: #ff5c5c;
        background-color: white;
      }
    }
    .sus {
      color: gray;
      &:hover {
        transition: 0.4s;
        color: white;
        background-color: gray;
      }
      &:not(:hover) {
        transition: 0.4s;
        color: gray;
        background-color: white;
      }
    }
  }
`;
