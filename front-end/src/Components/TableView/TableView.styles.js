import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  direction: rtl;
  font-family: 'vazir', sans-serif;
  text-align: center;
  border-collapse: collapse;

  tr{
    height: 60px;

  }
  td{
    border-bottom: 1px #F0F0F0 solid;
    padding-top: 10px;
    font-size: 1.2rem;
  }

  tr:hover{
    transition: .2s;
    background-color: #F0F0F0;
  }

  .header{
    font-size: 1.5rem;
  }

  .input{
    width: 300px;
    height: 35px;
    outline: none;
    border: 1px #F0F0F0 solid;
    padding-right: 10px;
    font-size: 1.1rem;
    font-family: 'vazir', sans-serif;
    border-radius: 5px;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .input:focus{
    transition: 1s;
    box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }

  .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root,
  .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input,
  .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
  .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root{
    font-family: 'vazir', sans-serif;
  }

  input{
    font-family: 'vazir', sans-serif;
  }
  
  .no-result{
    width: 100%;
    font-family: 'vazir', sans-serif;
  }
`;