import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-size: .94rem;
    margin-bottom: 8px;
  }
  select {
    border: 1px solid #5a5858;
    border-radius: 5.33px;
    padding: 8px 10px;
    font-size: 14px;
    font-family: "Roboto";
  }
`;
export const TitleConteiner = styled.div`
  width: 70%;
  margin-bottom: 5px;
  border-bottom: solid 1px black;
 
  h3 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const SelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #ff0000;
    font-family: "Roboto";
  }
`;
export const RangeStyle = styled.input`
  width: 100%;
  margin: 1rem 0 1rem 0;
  -webkit-appearance: none;
  appearance: none;
  display: inline-block;
  height: 0.3em;
  left: 4em;
  border-radius: 5px;
  border: solid 0.5px var(--green);
  background-color: none;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--green);
    cursor: pointer;
  }
`;
export const RangeConteiner = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  width: 100%;
  span {
    
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
export const ButtonStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    font-family: Roboto;
    font-weight: 700;
    font-size: .875rem;
    line-height: 23.44px;
  }
 
  h3 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 1rem;
    line-height: 23.44px;
    margin-bottom: 5px;
  }
`;
