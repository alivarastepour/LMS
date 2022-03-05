import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  direction: rtl;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 820px) {
    width: 90%;
  }
  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
  .header,
  h4 {
    font-family: "vazir", sans-serif;
    color: black;
  }
  .header {
    @media only screen and (max-width: 370px) {
      font-size: 1.7rem;
    }
  }
  .home {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .image {
    margin: auto;
    .img {
      width: 500px;
      height: 500px;
      @media only screen and (max-width: 820px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
