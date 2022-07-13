import { useContext } from "react";
import { GraficsContext } from "../../providers/grafics";
import { SearchStyled } from "./styles";

const FilterDashboard = () => {
  const { filterData } = useContext(GraficsContext);

  const filterButtons = (button) => {
    filterData(button);
  };

  return (
    <SearchStyled>
      <button onClick={() => filterButtons("")}>Todos</button>
      <button onClick={() => filterButtons("Ganho")}>Ganhos</button>
      <button onClick={() => filterButtons("Gasto")}>Gastos</button>
    </SearchStyled>
  );
};

export default FilterDashboard;
