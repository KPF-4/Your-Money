import styled from "styled-components";

export const FlexComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "0"};
  

  p {
    font-family: 'Lobster';
  }

  h1,
  h2 {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1100px) {
    width: 50%;
    justify-content: center;
  }
`;
