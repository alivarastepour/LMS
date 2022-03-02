import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  margin: 400px auto;
  direction: rtl;
  backdrop-filter: blur(3px) saturate(160%);
  -webkit-backdrop-filter: blur(30px) saturate(160%);
  background-color: rgba(255, 255, 255, 0.75);

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
    }
  }
  .header,
  .subheader {
    color: #8b9ce8;
    font-family: "vazir";
    text-align: center;
  }
  .header {
    @media only screen and (max-width: 830px) {
      & {
        font-size: 1.5rem;
      }
    }
  }
`;
