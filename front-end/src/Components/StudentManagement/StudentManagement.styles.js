import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  background-color: #edf0ff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

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
`;
