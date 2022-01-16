import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 100px;

  @media only screen and (max-width: 1747px) {
    & {
      flex-direction: column-reverse;
      justify-content: space-evenly;
    }
  }

  @media only screen and (max-width: 913px) {
    & {
      max-width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

export const Content = styled.div`
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  height: 700px;
  padding: 0 30px;

  @media only screen and (max-width: 695px) {
    max-width: 99%;
  }
`;

export const Heading = styled.div`
  height: 700px;
  padding-top: 100px;
  font-size: 2rem;
  font-family: "vazir", sans-serif;
  color: white;
  text-align: center;
  direction: rtl;
`;

export const Footer = styled.div`
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
