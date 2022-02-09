import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: auto;
  width: 90%;
  margin: auto;
  height: 800px;
  border-radius: 10px;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  direction: rtl;
  font-family: "vazir", sans-serif;
  .flex-header {
    display: flex;
    background-color: #fff;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-radius: 10px;
    position: sticky;
    top: 0;
  }
  .flex-item {
    font-size: 1.4rem;
    padding-top: 10px;
    @media only screen and (max-width: 945px) {
      & {
        font-size: 1.2rem;
      }
    }
  }
  .status {
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-right: 10px;
    width: 120px;
    height: 50px;
    border-radius: 7px;
    color: white;
    @media only screen and (max-width: 381px) {
      & {
        margin-right: 0;
      }
    }
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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
      border-bottom: 1px white solid;
      padding-top: 10px;
      font-size: 1.2rem;

      @media only screen and (max-width: 920px) {
        & {
          font-size: 1rem;
        }
      }
      @media only screen and (max-width: 470px) {
        & {
          font-size: 0.8rem;
        }
      }
      @media only screen and (max-width: 945px) {
        & {
          font-size: 0.7rem;
        }
      }
    }
    .hover:hover {
      transition: 0.2s;
      background-color: #f8f8f8;
    }
  }
  .record-link {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
