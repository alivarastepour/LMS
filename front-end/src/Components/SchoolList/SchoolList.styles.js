import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  .button-container {
    @media only screen and (max-width: 910px) {
      & {
        margin-top: 10px;
      }
    }
  }
  .input-container {
    @media only screen and (max-width: 760px) {
      input {
        width: 300px;
      }
    }
    @media only screen and (max-width: 467px) {
      input {
        width: 200px;
        font-size: 0.7rem;
      }
    }
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    direction: rtl;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    padding-top: 50px;
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
  .alert {
    width: 100%;
    margin: auto;
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
      @media only screen and (max-width: 642px) {
        & {
          font-size: 1rem;
        }
      }
    }
  }
`;
