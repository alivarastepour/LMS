import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;

  .btn {
    border-radius: 10px 10px 0 0;
    outline: none;
    border: none;
    width: 120px;
    height: 70px;
    font-family: "vazir", sans-serif;
    font-size: 1.5rem;
    margin-left: 10px;
    background-color: #f5f5f5;

    @media only screen and (max-width: 325px) {
      & {
        width: 90px;
      }
    }
  }

  .not-active {
    background-color: transparent;
  }
`;
