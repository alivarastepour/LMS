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
    font-family: 'Dinar', 'Tanha', sans-serif;
    font-size: 1.5rem;
    margin-left: 10px;
    background-color: #F5F5F5;
  }

  .not-active {
    background-color: transparent;
  }
`;