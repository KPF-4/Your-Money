import { Container, InputContainer } from "./styles";

const Input = ({ id, label, error, register, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer {...rest} {...register(name)} />
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default Input;
