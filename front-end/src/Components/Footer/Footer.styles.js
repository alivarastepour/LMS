import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 70px;
  margin: auto;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-content: center;
  align-items: baseline;

  .p-des {
    font-family: "vazir", sans-serif;
  }

  .e-des {
    font-family: sans-serif;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }
  @media only screen and (max-width: 620px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;
