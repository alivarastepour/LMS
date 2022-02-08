import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 800px;
  border-radius: 10px;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  direction: rtl;
  font-family: "vazir", sans-serif;
  padding-right: 10px;
  .flex-header {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .flex-item {
    font-size: 1.4rem;
    padding-top: 10px;
  }
  .status {
    display: inline-block;
    margin-right: 10px;
    width: 120px;
    height: 50px;
    border-radius: 7px;
    color: white;
    padding-right: 10px;
    padding-top: 10px;
  }
  .on {
    background-color: #17b327;
    &:hover {
      transition: 0.4s;
      opacity: 0.8;
    }
    &:not(:hover) {
      transition: 0.4s;
      opacity: 1;
    }
  }
  .off {
    background-color: #ff5c5c;
    &:hover {
      transition: 0.4s;
      opacity: 0.8;
    }
    &:not(:hover) {
      transition: 0.4s;
      opacity: 1;
    }
  }
  .state {
    margin-top: 70px;
    width: 100%;
  }
  .state-container,
  .enter {
    display: inline-block;
  }
  .state-container {
    margin-left: 100px;
  }
  .link-container {
    display: inline-flex;
    align-items: center;
  }
  .succes {
    font-family: "vazir", sans-serif;
    font-size: 1.2rem;
  }
  .enter {
    margin-left: 30px;
  }
`;
