import styled from "styled-components";

export const StyledDailyNewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  justify-content: space-between;
`;

export const Line = styled.div`
  border-bottom: 1px solid #000;
  width: ${(props) => props.width || "100%"};
  display: flex;
  h2 {
    font-size: 20px;
  }
`;

export const DailyNewsFeatured = styled.div`
  a {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
    margin: 5% 0;

    h3 {
      font-family: "Roboto";
    }

    span {
      font-family: "Inter";
      span {
        color: blue;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      width: 50%;
    }

    figure {
      height: 300px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      img {
        height: 100%;
      }
    }
  }
`;
