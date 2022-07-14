import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 250px;
  margin-top: 50px;
  background: #000;
  color: #fff;
  padding-top: 50px;
  gap: 5%;

  display: flex;
  justify-content: center;
  flex-direction: row;

  p {
    cursor: pointer;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    height: 50px;
    width: 50px;
  }

  p {
    font-family: "Lobster";
    font-style: normal;
    font-size: 180%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: 5px;

    a {
      color: #fff;
      font-family: "Inter";
    }

    #sobre {
      color: #fff;
    }
  }

  .redesSociais {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  @media (min-width: 631px) {
    gap: 10%;
  }
`;
