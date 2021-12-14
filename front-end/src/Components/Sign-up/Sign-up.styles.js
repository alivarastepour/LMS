import styled from "styled-components";

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
  .labelX{
    margin-top: 40px;
    direction: rtl;
    font-size: 1.4rem;
  }
  .inputX{
    margin-top: 10px;
  }
  .submitX{
    padding-top: 65px;
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
  .buttonX{
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
  .buttonX:hover,  .inp:hover{
    transition: 0.6s;
    background-color: #cecece;
  }
  .buttonX:not(:hover),  .inp:not(:hover){
    transition: 0.4s;
    background-color: white;
  }
  `;