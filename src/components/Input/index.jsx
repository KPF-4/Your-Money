import { useRef } from "react";
import { Container, InputContainer, Label } from "./styles";

const Input = ({ id, label, error, register, name, ...rest }) => {
  const ref = useRef(null)

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer 
      {...rest} 
      {...register(name)} 
      />
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default Input;
