import { Container, Label } from "../Input/styles"
import { SelectContainer } from "./style"

function SelectInput( { setValue, label, name, inputOptions}) {
    return(
        <>
            <Container>
                <Label htmlFor={name}> { label } </Label>
                <SelectContainer onChange={(event) => setValue(event.target.value)} name={name}>
                    {inputOptions.map((element, index) =>
                        <option key={index} value={element}>
                            {element}
                        </option>)}
                </SelectContainer>
            </Container>
        </>
    )
}



export default SelectInput