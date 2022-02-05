import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    direction: rtl;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    padding-top: 100px;
  }
  .input {
    width: 500px;
    height: 40px;
    display: block;
    margin: auto;
    outline: none;
    padding-right: 10px;
    direction: rtl;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px black solid;
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
    .hover {
      cursor: pointer;
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
`;
