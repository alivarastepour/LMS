import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 40px;
  justify-content: space-evenly;
  .flex-item {
    direction: rtl;
    text-align: center;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    width: 300px;
    height: 120px;
    border-radius: 5px;
    margin: 30px 10px;
    padding-top: 40px;
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:hover {
      transition: 0.4s;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
`;
