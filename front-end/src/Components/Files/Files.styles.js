import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  .file-item {
    font-family: sans-serif;
    margin-top: 20px;
  }
  .a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .cont {
    width: 100%;
    overflow: hidden;
  }
  .button {
    float: left;
    border: none;
    outline: none;
    font-family: "vazir", sans-serif;
    margin-left: 10px;
    width: 80px;
    height: 50px;
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: #f8f8f8;
  }

  .acc {
    background-color: #17b327;
    color: white;
  }

  .acc:hover {
    opacity: 0.9;
  }
`;
