import styled from "styled-components";

export const StyledDailyNewsCard = styled.li`
  a {
    display: flex;
    flex-direction: column;
    width: 260px;
    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    h3 {
      font-family: "Roboto";
    }

    p {
      font-family: "Inter";
    }

    figure {
      height: 260px;
      width: 260px;
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
