import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 70px;
  direction: rtl;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  backdrop-filter: blur(31px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 1340px) {
    & {
      width: 60%;
    }
  }
  @media only screen and (max-width: 900px) {
    & {
      width: 100%;
    }
  }
  @media only screen and (max-width: 350px) {
    & {
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0;
    }
  }

  .p-des {
    font-family: "vazir", sans-serif;
  }

  .e-des {
    font-family: "Raleway", sans-serif;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2vw;
  }
  @media only screen and (max-width: 620px) {
    width: 100%;
    font-size: 0.9rem;
  }
  .github {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    @media only screen and (max-width: 500px) {
      .report {
        display: none;
      }
    }
  }
  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .a {
    color: black;
  }
`;
