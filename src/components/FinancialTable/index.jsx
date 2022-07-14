import {
  FinancialTableContainer,
  FinancialTableHeader,
  FinancialTableAdd,
  FinancialTableBody,
  StyledSpan,
} from "./style";

import { Line } from "../LoginArea/styles";

import { BiAddToQueue } from "react-icons/bi";
import { useContext } from "react";
import { GraficsContext } from "../../providers/grafics";
import { ModalContext } from "../../providers/modals";

export const FinancialTable = () => {
  const { data } = useContext(GraficsContext);
  const { setAdd, setEdit, setPostId } = useContext(ModalContext);

  const handleAdd = () => {
    setAdd(true);
  };
  const handleEdit = (event) => {
    setPostId(event.target.id);
    setEdit(true);
  };

  return (
    <FinancialTableContainer>
      <FinancialTableHeader>
        <div className="headerContent">
          <Line>
            <h3>Tabela Financeira</h3>
          </Line>

          <FinancialTableAdd onClick={handleAdd}>
            <BiAddToQueue />
            <Line>
              <p>Adicionar</p>
            </Line>
          </FinancialTableAdd>
        </div>
      </FinancialTableHeader>

      <FinancialTableBody>
        <header className="headerStyleDiv">
          <div className="headerContent">
            <StyledSpan className="title" justify="flex-start">
              Nome
            </StyledSpan>

            <StyledSpan className="title">Tipo</StyledSpan>

            <StyledSpan className="title">Categoria</StyledSpan>

            <StyledSpan className="title" justify="flex-end">
              Valor
            </StyledSpan>
          </div>

          <Line />
        </header>

        {data.map((element, index) => (
          <div key={index} id={element.id} onClick={handleEdit}>
            <div className="item">
              <StyledSpan
                id={element.id}
                className="title"
                justify="flex-start"
              >
                {element.nome}
              </StyledSpan>

              {element.tipo === "Ganho" ? (
                <StyledSpan id={element.id} color="green">
                  {element.tipo}
                </StyledSpan>
              ) : (
                <StyledSpan id={element.id} color="red">
                  {element.tipo}
                </StyledSpan>
              )}

              <StyledSpan id={element.id} className="category">
                {element.categoria}
              </StyledSpan>

              {element.tipo === "Ganho" ? (
                <StyledSpan id={element.id} justify={"flex-end"} color="green">
                  {parseFloat(element.valor).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </StyledSpan>
              ) : (
                <StyledSpan id={element.id} justify={"flex-end"} color="red">
                  {parseFloat(element.valor).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </StyledSpan>
              )}
            </div>
            <Line />
          </div>
        ))}
      </FinancialTableBody>
    </FinancialTableContainer>
  );
};
