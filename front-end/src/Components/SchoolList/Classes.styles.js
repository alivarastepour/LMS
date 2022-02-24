import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  .table1 {
    direction: rtl;
    font-family: "vazir", sans-serif;
    text-align: center;
    border-collapse: collapse;

    tr {
      height: 60px;
    }

    td {
      border-bottom: 1px #f0f0f0 solid;
      font-size: 1rem;
      padding: 10px 40px;

      @media only screen and (max-width: 920px) {
        & {
          font-size: 0.8rem;
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
      font-size: 1.2rem;

      @media only screen and (max-width: 920px) {
        & {
          font-size: 1rem;
        }
      }
    }
  }
  .button {
    float: left;
    border: none;
    outline: none;
    font-family: "vazir", sans-serif;
    margin-left: 10px;
    width: 130px;
    height: 50px;
    border-radius: 5px;
    font-size: 1rem;
    background-color: #f8f8f8;
    margin: 20px 10px;
  }
  .acc {
    background-color: #17b327;
    color: white;
  }

  .acc:hover {
    opacity: 0.9;
  }
`;
