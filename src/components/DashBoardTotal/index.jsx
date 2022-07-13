import { useContext } from "react"
import { GraficsContext } from "../../providers/grafics"
import { DashBoardTotalContainer,
         DashBoardTotalHeader,
         DashBoardBody } from "./style"

import { StyledSpan } from "./style"

export const DashBoardTotal = () => {

    const {data} = useContext(GraficsContext)

    const positivo = data.filter(el=> el.tipo=== "Ganho").map(el=> el.valor).reduce((p, c)=> parseFloat(p)+parseFloat(c),0);
    const negativo = data.filter(el=> el.tipo=== "Gasto").map(el=> el.valor).reduce((p, c)=> parseFloat(p)+parseFloat(c),0);
    const total = parseFloat(positivo-negativo)
    const color = total >0? "green":"red";
    
    return(
        <DashBoardTotalContainer>
            <DashBoardTotalHeader>
                <h3>Valor total</h3>
            </DashBoardTotalHeader>

            <DashBoardBody>
                <p className="item">
                    Total de gastos: <StyledSpan color="red"> 
                                             {negativo.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                                })}
                                        </StyledSpan>
                </p>

                <p className="item">
                    Total de ganhos: <StyledSpan color="green"> 
                                            {positivo.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                                })}
                                        </StyledSpan>
                </p>

                <p className="item">
                    Saldo: <StyledSpan color={color}>
                                {total.toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                    })}
                              </StyledSpan>
                </p>
            </DashBoardBody>

        </DashBoardTotalContainer>
    )
}

