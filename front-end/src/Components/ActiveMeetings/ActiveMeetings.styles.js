import styled from "styled-components";

export const Wrapper = styled.div`
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
  }
  .button {
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
  .enter {
    color: #17a1b3;
    width: 100px;
    &:hover {
      transition: 0.4s;
      color: white;
      background-color: #17a1b3;
    }
    &:not(:hover) {
      transition: 0.4s;
      color: #17a1b3;
      background-color: white;
    }
  }
  .end {
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
  .no-meet {
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    direction: rtl;
    text-align: center;
  }
  a {
    color: #17a1b3;
    text-decoration: none;
    display: block;
    width: 80px;
    height: 30px;
    margin: auto;
    &:hover {
      transition: 0.4s;
      color: white;
    }
    &:not(:hover) {
      transition: 0.4s;
      color: #17a1b3;
    }
  }
`;
