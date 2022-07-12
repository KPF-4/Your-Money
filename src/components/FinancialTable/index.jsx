import { FinancialTableContainer, 
         FinancialTableHeader, 
         FinancialTableAdd, 
         FinancialTableBody, 
         StyledSpan } from "./style"

import { Line } from "../LoginArea/styles";

import { BiAddToQueue } from "react-icons/bi"
import { useContext } from "react";
import { GraficsContext } from "../../providers/grafics";

export const FinancialTable = ( {handleEditFinancialPlanModal, handleFinancialPlanModal } ) => {
    const {data} = useContext(GraficsContext)


    return (
        <FinancialTableContainer>
            <FinancialTableHeader>
                <div className="headerContent">
                    <h3>
                        Tabela Financeira
                    </h3>

                    <div className="headerBtn">
                        <BiAddToQueue />
                        <FinancialTableAdd onClick={() => handleFinancialPlanModal()}>
                            Adicionar
                        </FinancialTableAdd>
                    </div>
                </div>

                <Line />
            </FinancialTableHeader>

            <FinancialTableBody>
                <header className="headerStyleDiv">
                    <div className="headerContent">
                        <StyledSpan justify="flex-start">
                            Nome
                        </StyledSpan>

                        <StyledSpan>
                            Tipo
                        </StyledSpan>

                        <StyledSpan>
                            Categoria
                        </StyledSpan>

                        <StyledSpan justify="flex-end">
                            Valor
                        </StyledSpan>
                        
                    </div>

                    <Line />
                </header>

                {data.map((element,index) =>
                    <div 
                        key={index}
                        id={element.id}
                        onClick={(event) => handleEditFinancialPlanModal(event)} >
                        <div className="item">
                            <StyledSpan 
                                id={element.id} 
                                justify="flex-start">
                                {element.nome}
                            </StyledSpan>
                            
                            {element.tipo === "Ganho" ? (
                                <StyledSpan 
                                    id={element.id} 
                                    color="green">
                                    {element.tipo}
                                </StyledSpan>
                            ) : (
                                <StyledSpan 
                                    id={element.id} 
                                    color="red">
                                    {element.tipo}
                                </StyledSpan>
                            )}

                            <StyledSpan 
                                id={element.id} >
                                {element.categoria}
                            </StyledSpan>

                            {element.tipo === "Ganho" ? (
                                <StyledSpan 
                                    id={element.id}
                                    justify={"flex-end"} 
                                    color="green">
                                    {parseFloat(element.valor).toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                        })}
                                </StyledSpan>
                            ) : (
                                <StyledSpan 
                                    id={element.id}
                                    justify={"flex-end"} 
                                    color="red">
                                        {parseFloat(element.valor).toLocaleString("pt-br", {
                                            style: "currency",
                                            currency: "BRL",
                                            })}
                                </StyledSpan>
                            )}
            
                        </div>
                        <Line />
                    </div>
                )}
            </FinancialTableBody>

        </FinancialTableContainer>
    )
}