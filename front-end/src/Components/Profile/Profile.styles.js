import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 50%; 
    height: 88%;
    margin: auto;
    background-color: #edf0ff;
    border-radius: 10px;
    direction: rtl;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
    @media only screen and (max-width:915px){
        &{
            width: 90%;
        }
    }


    input[type="file"] {
        display: none;
    }
    
    .label{
        font-family: 'vazir', sans-serif;
        font-size: 1.5rem;
        direction: rtl;
    }
    .content{
        font-size: 1.1rem;
    }

    .grid-item{
        margin: auto;
    }

    .profile-image{
        border-radius: 50%;
        width: 200px;
        height: 200px;

        @media only screen and (max-width: 405px){
            &{
                width: 150px;
                height: 150px;
                display: block;
                float: right;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;


      @media only screen and (max-width: 405px){
            &{
                width: 150px;
                font-size: 1rem;
                float: right;
                align-content: center;

            }
        }

    }
    .button:hover{
      transition: 0.4s;
      color: white;
      background-color: #8b9ce8;
    }
    .button:not(:hover){
      transition: 0.4s;
      color: black;
      background-color: white;
    }
`;