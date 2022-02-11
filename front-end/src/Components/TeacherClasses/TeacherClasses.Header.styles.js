import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 15px;
  .select-item,
  .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root {
    font-family: "vazir", sans-serif;
  }
  .list-title {
    font-family: "vazir", sans-serif;
    font-size: 1.5rem;
    direction: rtl;
    padding-right: 10px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .select-container {
      @media only screen and (max-width: 650px) {
        .x {
          width: 300px;
        }
      }
      @media only screen and (max-width: 500px) {
        .x {
          width: 200px;
        }
      }
      @media only screen and (max-width: 355px) {
        .x {
          width: 170px;
        }
      }
    }
  }
`;
