import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    .table{
        width: 100%;
        direction: rtl;
        font-family: 'vazir', sans-serif;
        text-align: center;
        border-collapse: collapse;
    }
    
    .header{
        font-size: 1.4rem;

    @media only screen and (max-width:920px){
      &{
        font-size: 1.1rem;
      }
    }
  }

    tr{
        height: 60px;
    }

    .hover:hover{
      transition: .2s;
      background-color: #F8F8F8;
    }
  
    td{
      border-bottom: 1px #F0F0F0 solid;
      padding-top: 10px;
      font-size: 1.2rem;
    }

    .input{
        outline: none;
        border: none;
        width: 300px;
        height: 50px;
        border-radius: 12px;
        padding-right: 10px;
        padding-left: 10px;
        color: black;
        font-family: 'vazir', sans-serif;
        font-size: 1.2rem;
        border: 1px solid #F0F0F0;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

        &::placeholder{
            font-size: 0.9rem;
        }

        @media only screen and (max-width:460px){
            &{
                font-size: 1rem;
            }
        }

    }

    .button{
        width: 100px;
        height: 40px;
        background-color: white;
        outline: none;
        border: none;
        font-family: 'vazir', sans-serif;
        border-radius: 10px;
        border: 1px solid #F0F0F0;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

        &:hover{
            transition: 0.4s;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

        &:not(:hover){
            transition: 0.4s;
            box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        }
    }

`;