import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .flex-item{
        width: 50%;
        height: 100%;
    }

    .item1{
        overflow-y: auto;
    }

    .item2{
        display: block;
        direction: rtl;
        padding: 300px 30px;

        @media only screen and (max-width:1000px){
            &{
                padding: 50px 50px;
            }
        }
        @media only screen and (max-width:935px){
            &{
                padding: 50px 10px;
            }
        }
        @media only screen and (max-width:680px){
            &{
                padding: 50px 0;
            }
        }
    }

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

    tr:hover{
      transition: .2s;
      background-color: #F0F0F0;
    }
  
    td{
      border-bottom: 1px #F0F0F0 solid;
      padding-top: 10px;
      font-size: 1.2rem;
    }

    @media only screen and (max-width:1000px){
        flex-direction: column;

        .flex-item{
          border: 1px solid black;
          width: 100%;
          height: 50%;
        }
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
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

        &:focus{
            transition: 0.4s;
            background-color: #8b9ce8;
            color: white;
        }   

        &::placeholder{
            font-size: 0.9rem;
        }

        &:focus::placeholder{
            color: white;
        }  

        @media only screen and (max-width:1500px){
            .input{
                display: block;
            }
        }

        @media only screen and (max-width:460px){
            &{
                width: 95%;
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
        margin-right: 40px;
        border: 1px solid #F0F0F0;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

        &:hover{
            transition: 0.4s;
            background-color: #8b9ce8;
            color: white;
        }

        &:not(:hover){
            background-color: white;
            transition: 0.4s;
            color: black;
        }

        @media only screen and (max-width:1500px){
            &{
                margin-top: 40px;
                margin-right: 0;
            }
        }

        @media only screen and (max-width:960px){
            &{
                margin-right: 40px;
            }
        }

        @media only screen and (max-width:680px){
            &{
                margin-right: 0;
            }
        }
    }
`;