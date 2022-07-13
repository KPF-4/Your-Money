import styled from "styled-components";

export const Title = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SuportArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  #sup {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  @media (min-width: 750px) {
    #sup {
        margin-top: 20px;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    figure {
      max-width: 50%;
    }
  }
`;
