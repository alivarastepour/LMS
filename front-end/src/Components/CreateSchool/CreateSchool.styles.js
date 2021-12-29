import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  direction: rtl;
  padding:100px 100px 0 0;
  font-family: 'vazir', sans-serif;
  
  .flex-item{
    width: 500px;
    height: 120px;
  } 
  
  .input{
    width: 300px;
    height: 60px;
    border: none;
    border-bottom: 1px black solid;
    outline: none;
    padding: 10px 20px 10px 0;
    font-size: 1.1rem;
    font-family: 'vazir', sans-serif;
    border-radius: 10px 10px 0 0 ;
    background-color: white;
    
    &:focus{
      transition: 0.4s;
      background-color: #8b9ce8;
      color: white;
      border-bottom: 1px white solid;
    }
    &:not(:focus){
      transition: 0.4s;
      background-color: white;
      color: black;
      border-bottom: 1px black solid;
    }
  }
  
  .left{
    direction: ltr;
    padding: 10px 0 10px 20px;
  }
  
  .address{
    width:450px;
  }
  
  .label{
    font-size: 1.3rem;
  }

  .button{
    width: 200px;
    height: 50px;
    //margin: auto;
    display: block;
    float: right;
    font-size: 1.2rem;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 10px;
  }
`;