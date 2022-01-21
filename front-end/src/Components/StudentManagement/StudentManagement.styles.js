import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  flex-direction: column;
  overflow-y: auto;
  width: 90%;
  height: 100%;
  background-color: #edf0ff;
  border-radius: 10px;

  .list-title {
    font-family: "vazir", sans-serif;
    font-size: 1.3rem;
    direction: rtl;
    padding-right: 10px;
  }

  .list-item {
    font-family: "vazir", sans-serif;
  }

  .p {
    margin-right: 20px;
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
