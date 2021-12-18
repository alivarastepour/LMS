import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    padding-left: 30px;
    padding-bottom: 173px;
`;

export const Content = styled.div`
    backdrop-filter: blur(31px) saturate(160%);
    -webkit-backdrop-filter: blur(30px) saturate(160%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 20px; 
    height: 700px;
    padding: 0 30px;
`;

export const Heading = styled.div`
    height: 700px;
    padding-top: 100px;
    font-size: 2.0rem;
    color: white;
    text-shadow: 0 1px 0 black;
    text-align: center;
    direction: rtl;
`;