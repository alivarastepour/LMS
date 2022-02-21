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
  .header,
  h4 {
    font-family: "vazir", sans-serif;
    color: black;
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
  }
`;
