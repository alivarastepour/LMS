import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 300px;
    height: 50px;
    border: 1px black solid;

    .input{
        outline: none;
        border: none;
        width: 250px;
        height: 40px;
        text-align: center;
        border-radius: 10px;
    }

    .input:hover{
        transition: 0.6s;
        background-color: #8b9ce8;
        color: white !important;
    }

    .input:hover::placeholder{
        color: white;
    }

    .input:not(:hover){
        transition: 0.4s;
        background-color: white;
    }

    .content{
        display: inline-block;
        width: 250px;
        height: 40px;
        direction: rtl;
        text-align: right;
        font-size: 1.5rem;
        font-family: 'vazir', sans-serif;
    }

    .icon{
        padding-left: 10px;
    }
`;