import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 90%;
  height: 50px;
  direction: rtl;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: auto;

  .button{
      height: 50px;
      font-size: 1.1rem;
      border: none;
      outline: none;
      border-radius: 10px 10px 0 0 ;
      font-family: 'vazir', sans-serif;
  }
  .active{
    background-color: 	#E8E8E8;  
    color: black;
  }
  .inactive{
    background-color: transparent;
    color: #8b9ce8;

    &:hover{
      transition: 0.4s;
      background-color: #bdc9ff;
      color: white;
    }
    &:not(:hover){
      transition: 0.4s;
      background-color: transparent;
      color: #8b9ce8;
    }
  }

  .margin{
      margin-right: 10px;
  }


`;