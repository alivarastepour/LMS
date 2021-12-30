import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

  .error{
    padding: 0 10px;
    direction: rtl;
    text-align: center;
    font-family: 'vazir', sans-serif;
    font-size: 1.4rem;
  }
  .button{
    display: block;
    width: 350px;
    height: 100px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-family: 'vazir', sans-serif;
    font-size: 1.5rem;
    background-color: #8b9ce8;
    margin: 10px auto;

    &:hover{
      transition: 0.4s;
      background-color: #8b9ce8;
      color: white;
    }
    &:not(:hover){
      transition: 0.4s;
      background-color: white;
      color: #8b9ce8;
    }
  }
`;