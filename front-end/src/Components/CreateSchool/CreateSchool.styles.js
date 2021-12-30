import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  direction: rtl;
  padding:100px 100px 0 0;
  font-family: 'vazir', sans-serif;

  @media only screen and (max-width:850px){
    padding: 100px 20px;
  }

  @media only screen and (max-width:645px){
    padding: 100px 10px;
  }
  
  .flex-item{
    width: 500px;
    height: 120px;

  } 
  
  .input{
    width: 300px;
    height: 50px;
    border: none;
    outline: none;
    padding: 10px 20px 10px 0;
    font-size: 1.1rem;
    font-family: 'vazir', sans-serif;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    
    @media only screen and (max-width:420px){
      width: 220px;
    }

    &:focus{
      transition: 0.4s;
      background-color:#b8c5ff;
      color: white;
    }
    &:not(:focus){
      transition: 0.4s;
      background-color: white;
      color: black;
    }
  }
  
  .left{
    direction: ltr;
    padding: 10px 0 10px 20px;


  }
  
  .address{
    width:450px;

    @media only screen and (max-width:645px){
      width: 300px;
    }

    @media only screen and (max-width:420px){
      width: 220px; 
    }

  }
  
  .label{
    font-size: 1.3rem;
  }

  .button{
    width: 200px;
    height: 50px;
    display: block;
    float: right;
    font-size: 1.2rem;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .exp{
    visibility: hidden;
  }
`;