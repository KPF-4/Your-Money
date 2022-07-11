import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  height: 40%;

  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 16px;
  font-family: "Inter", sans-serif;

  background-color: white;
  position: relative;

  p,
  a {
    display: flex;
    align-items: center;
  }

  div {
    width: 64px;
    svg {
      border: 1px solid #000;
      border-radius: 50%;
      height: auto;
      transform: scale(2.5);
      path {
        transform: scale(1.1);
      }
    }
  }
`;

export const UserOptions = styled.section`
  position: absolute;
  top: 150%;
  left: -95%;
  display: ${props => props.showOptions ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
  padding: 8px;

  a,
  p {
    padding: 8px 50px;
  }
`;
