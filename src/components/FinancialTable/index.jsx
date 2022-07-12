import { FinancialTableContainer, 
         FinancialTableHeader, 
         FinancialTableAdd, 
         FinancialTableBody, 
         StyledSpan } from "./style"

import { Line } from "../LoginArea/styles";

import { BiAddToQueue } from "react-icons/bi"

export const FinancialTable = ( { data, handleEditFinancialPlanModal, handleFinancialPlanModal } ) => {
     
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

                {data.map(element =>
                    <div 
                        id={element.id}
                        onClick={(event) => handleEditFinancialPlanModal(event)} >
                         {console.log(element)}
                        <div className="item">
                            <StyledSpan 
                                id={element.id} 
                                justify="flex-start">
                                {element.entryName}
                            </StyledSpan>
                            
                            {element.entryType === "Entrada" ? (
                                <StyledSpan 
                                    id={element.id} 
                                    color="green">
                                    {element.entryType}
                                </StyledSpan>
                            ) : (
                                <StyledSpan 
                                    id={element.id} 
                                    color="red">
                                    {element.entryType}
                                </StyledSpan>
                            )}

                            <StyledSpan 
                                id={element.id} >
                                {element.categoryType}
                            </StyledSpan>

                            {element.entryType === "Entrada" ? (
                                <StyledSpan 
                                    id={element.id}
                                    justify={"flex-end"} 
                                    color="green">
                                    {element.amountValue}
                                </StyledSpan>
                            ) : (
                                <StyledSpan 
                                    id={element.id}
                                    justify={"flex-end"} 
                                    color="red">
                                        {element.amountValue}
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