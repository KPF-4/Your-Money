import { useContext } from "react";
import { useState } from "react";
import { GraficsContext } from "../../providers/grafics";
import Button from "../Button";
import { InputContainer, SearchStyled } from "./styles";

const SearchDashboard = () => {
  const [userInput, setUserInput] = useState("");
  const { filterData } = useContext(GraficsContext);

  const searchInput = () => {
    filterData(userInput);
  };

  return (
    <SearchStyled>
      <InputContainer onKeyUp={(event) => setUserInput(event.target.value)} />
      <Button onClick={searchInput} background="var(--blue-button)">
        Pesquisar
      </Button>
    </SearchStyled>
  );
};

export default SearchDashboard;
