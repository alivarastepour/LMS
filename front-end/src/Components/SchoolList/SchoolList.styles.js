import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

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
