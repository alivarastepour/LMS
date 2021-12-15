import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 600px;
    height: 600px;
    margin: auto;
    background-color: #F5F5F5;
    box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;
    border-radius: 10px;
`;

export const Content = styled.div`
    max-width: 400px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

  *{
    font-family: 'Dinar', sans-serif;
  }
  .flex-item{
    width: 350px;
  }
  .label{
    margin-top: 80px;
    direction: rtl;
    font-size: 1.4rem;
  }
  .input{
    margin-top: 20px;
  }
  .submit{
    padding-top: 90px;
  }
  .inp{
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1.0rem;
    text-align: center;
  }
  .button{
    width: 200px;
    height: 50px;
    margin: auto;
    display: block;
    font-size: 1.2rem;
    outline: none;
    background-color: white;
    border: none;
    border-radius: 10px;
  }
  .button:hover,  .inp:hover{
    transition: 0.6s;
    background-color: #cecece;
  }
  .button:not(:hover),  .inp:not(:hover){
    transition: 0.4s;
    background-color: white;
  }
  .error-msg-hide{
    visibility: hidden;
    
  }
  .error-msg-show{
    display: block;
    visibility: visible;
    color: red;
  }
  .errorLogin{
    text-align: center;
    direction: rtl;
  }

`;