import styled from "styled-components";

export const StyledDailyNewsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    justify-content: space-between;
`

export const Line = styled.div`
  border-bottom: 1px solid #000;
  width: ${(props) => props.width || "100%"};
  display: flex;
  h2 {
    font-size: 20px;
  }
`;