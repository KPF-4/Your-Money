import styled from "styled-components";

export const StyledWeeklyNewsCard = styled.li`
  list-style: none;
  a {
    display: flex;
    align-items: center;
    gap: 5px;

    div {
        width: 70%;
    }
    figure {
      height: 100px;
      width: 100px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      img {
        transform: scale(1.1);
        height: 100%;
      }
    }
  }
`;
