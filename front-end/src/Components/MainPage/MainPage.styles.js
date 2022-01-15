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
