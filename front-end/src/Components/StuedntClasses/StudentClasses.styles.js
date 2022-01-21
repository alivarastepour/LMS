import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .list-item {
    font-family: "vazir", sans-serif;
  }

  .no-class {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: auto;
    direction: rtl;
    font-family: "vazir", sans-serif;
    font-size: 1.5rem;

    &:hover {
      transition: 0.4s;
      color: #4456b1;
    }
    &:not(:hover) {
      transition: 0.4s;
      color: black;
    }
  }
`;
