import { Container, InputContainer, Label } from "./styles";

const Input = ({ label, error, register, name, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer {...rest} {...register(name)} />
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default Input;
