import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 1000px;
    height: 700px;
    margin: auto auto;
    backdrop-filter: blur(30px) saturate(160%);
    -webkit-backdrop-filter: blur(30px) saturate(160%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 20px;

    .body{
        height: 630px;
    }
`;