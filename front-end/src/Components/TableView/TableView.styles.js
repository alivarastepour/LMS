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

    @media only screen and (max-width:920px){
      &{
        font-size: 1rem;
      }
    }
  }

  tr:hover{
    transition: .2s;
    background-color: #F0F0F0;
  }

  .header{
    font-size: 1.5rem;

    @media only screen and (max-width:920px){
      &{
        font-size: 1.3rem;
      }
    }
  }

  .no-result{
    width: 100%;
    font-family: 'vazir', sans-serif;
  }
`;