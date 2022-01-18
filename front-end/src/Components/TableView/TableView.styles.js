import styled from "styled-components";

export const Table = styled.table`
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

  .no-result {
    width: 100%;
    font-family: "vazir", sans-serif;
  }
  .st {
    display: inline-block;
  }

  .st-button {
    font-family: "vazir", sans-serif;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    margin-right: 14px;
    cursor: pointer;
    font-size: 1rem;
    width: 80px;
    height: 30px;
  }
  .accept {
    color: #17b327;
  }
  .reject {
    color: #ff5c5c;
  }

  .accept:hover {
    background-color: #17b327;
    color: white;
    transition: 0.4s;
  }
  .accept:not(:hover) {
    background-color: transparent;
    color: #17b327;
    transition: 0.4s;
  }

  .reject:hover {
    background-color: #ff5c5c;
    color: white;
    transition: 0.4s;
  }
  .reject:not(:hover) {
    background-color: transparent;
    color: #ff5c5c;
    transition: 0.4s;
  }

  .acc {
    color: #17b327;
  }

  .rej {
    color: #ff5c5c;
  }

  .flex-td {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .name {
    margin-right: 5px;
  }
`;
