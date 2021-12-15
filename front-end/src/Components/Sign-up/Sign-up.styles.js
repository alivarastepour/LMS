import styled from "styled-components";

export const Content = styled.div`
  max-width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  * {
    font-family: 'Dinar', sans-serif;
  }

  .flex-item {
    width: 350px;
  }

  .labelX {
    margin-top: 25px;
    direction: rtl;
    font-size: 1.4rem;
  }

  .inputX {
    margin-top: 5px;
  }

  .submitX {
    padding-top: 25px;
  }

  .inp {
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1.0rem;
    text-align: center;
  }

  .buttonX {
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

  .buttonX:hover, .inp:hover {
    transition: 0.6s;
    background-color: #cecece;
  }

  .buttonX:not(:hover), .inp:not(:hover) {
    transition: 0.4s;
    background-color: white;
  }

  .select {
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 1.0rem;
    text-align: center;
    background-color: #fff;
  }

  .error {
    border: 2px rgba(255, 0, 0, 0.37) solid;
  }
  .error-msg-show{
    visibility: visible;
    color: red;
  }
  .error-msg-hide{
    visibility: hidden;
  }
  .errorSignup{
    text-align: center;
    direction: rtl;
  }
`;