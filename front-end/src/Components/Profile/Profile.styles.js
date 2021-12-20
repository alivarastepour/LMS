import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    margin: auto;
    background-color: #F5F5F5;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 20% 20% 20%;
    justify-content: space-evenly;

    .label{
        font-family: 'vazir', sans-serif;
        font-size: 1.4rem;
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
    }
    .item1{
        grid-row: 1/3;
    }

    .item6{
        grid-column: 1/4;

        .wrapper{
            width: 440px;
        }
        .label, .content, .input{
            width: 400px;
        }

        .input, .content{
            font-size: 1rem;
        }
    }

    .label{
        direction: rtl;
    }
`;