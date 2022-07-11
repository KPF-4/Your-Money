import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  top: ${props=> props.scroll === "up" ? "0" : "-60px"};
  background-color: #fff;
  transition: 0.2s;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 8px 0px #00000040;
  background-color: #fff;

  #header-container {
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #menu-icon {
    display: none;
    cursor: pointer;
    transition: 0.3s;
    transform: ${(props) =>
      props.rotation ? "rotate(90deg)" : "rotate(0deg)"};
  }

  #links-area {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 16px;
  }

  #redirectBtns-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .redirectBtn {
    border: none;
    height: 40%;

    display: flex;
    align-items: center;

    font-weight: bold;
    font-size: 14px;
    font-family: "Inter", sans-serif;

    background-color: white;
  }

  @media screen and (max-width: 630px) {
    #menu-icon {
      display: flex;
      font-size: 20px;
    }

    #redirectBtns-container {
      display: none;
    }

    #links-area {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  @media (min-width: 631px) {
    #links-area {
      min-width: 48%;
      gap: 10px;

      #redirectBtns-container {
        gap: calc(10vw * 0.2);
      }
    }
  }
`;
