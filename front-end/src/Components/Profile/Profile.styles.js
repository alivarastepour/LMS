import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: #F5F5F5;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-template-rows: 20% 20% 20% 20%;
    direction: rtl;
    justify-content: space-evenly;

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
        @media only screen and (max-width: 1060px){
        &{
            width: 200px;
            height: 200px;
        }
        }
    }
    .item1{
        grid-row: 1/4;
    }

    .label{
        direction: rtl;
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