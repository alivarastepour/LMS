import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  direction: rtl;
  text-align: right;
  align-content: center;

  .image{
    text-align: center;
  }

  input[type='file']{
    display: none;
  }
  
  img{
    width: 300px;
    height: 300px;
    display: block;
    margin-bottom: 10px;
    border-radius: 50%;
  }
  .label{
    font-family: 'vazir', sans-serif;
    font-size: 1.4rem;
  }
  .content{
    font-size: 1.3rem;
    padding-top: 20px;
  }
  .button{
    font-family: 'vazir', sans-serif;
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
  .button:hover{
    transition: 0.6s;
    background-color: #8b9ce8;
    color: white;
  }

  .button:not(:hover){
    transition: 0.4s;
    background-color: white;
  }

  .change{
    margin-top: 40px;
  }

  input{
    font-family: 'vazir', sans-serif;
    width: 500px !important;
    text-align: right;
  }
  input::placeholder{
    text-align: right;
  }
`;