import styled from "styled-components";

export const StyledNewsArea = styled.section`
  .noticiasDiarias {
    display: none;
  }

  .noticiasDestaque {
    section {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;

    .noticiasDestaque {
      margin-top: 50px;
      max-width: 270px;
    }

    .noticiasDiarias {
      width: 80%;
      display: flex;
      justify-content: center;
    }
  }
`;
