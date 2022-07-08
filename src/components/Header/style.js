import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 8px 0px #00000040;

  #header-container {
    width: 80%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #menu-icon {
    display: none;
  }

  #links-area {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    font-size: 16px;
  }

  #redirectBtns-container {
    gap: 10px;
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
`;
