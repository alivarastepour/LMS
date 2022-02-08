import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 40px;
  justify-content: space-evenly;
  .flex-item {
    direction: rtl;
    text-align: right;
    padding-right: 10px;
    padding-left: 10px;
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
    width: 300px;
    height: 150px;
    border-radius: 20px;
    margin: 30px;
    border: 2px black solid;
    cursor: pointer;
    background-color: white;
    .title {
      font-size: 1rem;
      color: gray;
    }
    .school-name {
      padding-bottom: 5px;
      padding-top: 8px;
      color: black;
      font-size: 1.5rem;
      text-align: left;
    }
    .school-teacher {
      color: black;
      font-size: 1.2rem;
      text-align: left;
    }
  }
`;
