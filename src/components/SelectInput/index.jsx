import { Container, Label } from "../Input/styles";
import { SelectContainer } from "./style";

const SelectInput = ({ setValue, label, name, inputOptions, error, value, register}) => {
  return (
    <>
      <Container>
        <Label htmlFor={name}> {label} </Label>
        <SelectContainer
          onChange={(event) => setValue(event.target.value)}
          {...register(name)}
        > 
          {inputOptions.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </SelectContainer>
        {error && <span>{error.message}</span>}
      </Container>
    </>
  );
};

export default SelectInput;