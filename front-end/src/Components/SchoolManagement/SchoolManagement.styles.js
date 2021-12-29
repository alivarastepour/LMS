import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%; 
  height: 90%;
  margin: auto;
  background-color: #F5F5F5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  
  .button{
    width: 350px;
    height: 100px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-family: 'vazir', sans-serif;
    font-size: 1.5rem;
    background-color: #8b9ce8;
    margin: auto auto;

    div{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span{
      padding: 10px;
    }

    .plus{
      font-size: 3rem;
    }

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