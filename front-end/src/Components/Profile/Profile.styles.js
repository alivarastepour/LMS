import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%; 
    height: 90%;
    margin: auto;
    background-color: #F5F5F5;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    direction: rtl;
    justify-content: space-evenly;

    @media only screen and (max-width:1355px){
        & { 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }

    @media only screen and (max-width:1205px){
        & { 
            grid-template-columns: 200px;
            grid-template-rows: auto auto auto;
        }
    }

    input[type="file"] {
        display: none;
    }
    
    .label{
        font-family: 'vazir', sans-serif;
        font-size: 1.8rem;
        direction: rtl;
    }
    .content{
        font-size: 1.2rem;
    }

    .grid-item{
        margin: auto;
    }

    .profile-image{
        border-radius: 50%;
        width: 299px;
        height: 299px;
        @media only screen and (max-width: 1205px){
            &{
                width: 200px;
                height: 200px;
            }
        }
    }
    .item1{
        grid-row: 1/4;

        @media only screen and (max-width:1205px){
            grid-row: 1/1;
        }
    }
    

    .item8{
        grid-column: 1/4;

        @media only screen and (max-width:1205px){
            &{
                grid-column: 1/1;
            }
        }
        
    }
    .label{
        direction: rtl;
    }
    .button{
      background-color: white;
      border: none;
      outline: none;
      font-family: 'vazir', sans-serif;
      font-size: 1.3rem;
      border-radius: 10px;
      padding: 10px;
      margin: auto;
      display: block;
    }
    .button:hover{
      transition: 1s;
      color: white;
      background-color: #8b9ce8;
    }
    .button:not(:hover){
      transition: 1s;
      color: black;
      background-color: white;
    }
    @media only screen and (max-width: 1060px){
        & {
            grid-template-rows: auto auto auto auto;
        }
        .item1{
            grid-row: 1/3;
        }

    }
`;