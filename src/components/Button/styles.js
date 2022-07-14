import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  padding: ${(props) => props.padding || "10px"};
  background-color: ${(props) => props.background || "unset"};
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: fit-content;
  width: ${(props) => props.width || "auto"};
  font-size: 14px;
  font-weight: 700;
  transition: 300ms;

  :hover {
    transform: scale(1.1);
  }
  :active {
    background-color: ${(props) =>
      props.background === "var(--green-button)"
        ? "green"
        : props.background === "var(--blue-button)"
        ? "#196fb6"
        : "red"};
    transform: scale(0.95);
  }
`;
