import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  padding-top: 200px;

.example-container div {
  background-color: ${(props) => props.color.c};
  border-radius: 30px;
  width: 150px;
  height: 150px;

  @media only screen and (max-width:420px) {
    .example-container div{
      width: 100px;
      height: 100px;
    }
  }    
}

.text{
  padding-top: 100px;
  text-align: center;
  font-family: 'vazir', sans-serif;
}
`;