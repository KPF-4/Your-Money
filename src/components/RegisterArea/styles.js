import styled from "styled-components";

export const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    
    .data-content {
      width: 300px;
    }
  }
  

`;

export const FlexComponent = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "wrap"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};
  align-items: ${props=>props.align || "auto"};
  justify-content: ${props=> props.justify|| "unset"};

  
`;

export const Line = styled.div`
  border-bottom: 1px solid #000;
  width: ${props=>props.width || "100%"};
`;