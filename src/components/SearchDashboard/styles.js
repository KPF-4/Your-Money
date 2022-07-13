import styled from "styled-components";

export const InputContainer = styled.input`
  border: 1px solid #5a5858;
  border-radius: 5.33px;
  padding: 8px 10px;

  font-size: 14px;
  font-family: "Roboto";
  min-width: 10px;
  width: 500px;
`;

export const SearchStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2%;
  margin: 16px 0;
  width: 80%;
  button {
    padding: 10px 20px;
  }
`;
