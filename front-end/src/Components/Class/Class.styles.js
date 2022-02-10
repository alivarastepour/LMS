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
  .date {
    background-color: #213212;
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
    @media only screen and (max-width: 1600px) {
      & {
        flex-direction: column;
      }
    }
  }
  .state-container {
    margin-left: 100px;
    @media only screen and (max-width: 1790px) {
      & {
        margin-left: 20px;
      }
    }
    @media only screen and (max-width: 1600px) {
      & {
        margin-left: 0;
      }
    }
  }
  .date-container {
    margin-right: 100px;
    @media only screen and (max-width: 1790px) {
      & {
        margin-right: 20px;
      }
    }
    @media only screen and (max-width: 1600px) {
      & {
        margin-right: 0;
        margin-top: 10px;
      }
    }
  }
  .link-container {
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 1600px) {
      & {
        margin-top: 10px;
      }
      .txt {
        width: 400px;
      }
    }
    @media only screen and (max-width: 625px) {
      & {
        display: block;
      }
    }
    @media only screen and (max-width: 460px) {
      .txt {
        width: 280px;
      }
    }
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
    margin-top: 30px;
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
  .title {
    font-size: 1.7rem;
  }
  .no-rec {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;
