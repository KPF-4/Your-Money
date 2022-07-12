import { Line } from "../LoginArea/styles"
import { DashBoardTotalContainer,
         DashBoardTotalHeader,
         DashBoardBody } from "./style"

import { StyledSpan } from "./style"

export const DashBoardTotal = ( { data } ) => {
    const positiveNums = data.map(element => {
        if (element.entryType === "Entrada") {
            const positiveFilter = parseFloat(element.amountValue
                                  .replace(/\./g, '')
                                  .replace(',', '.'))
            return positiveFilter
        }
    })

    const negativeNums = data.map(element => {
            if (element.entryType === "Saída") {
            const negativeFilter = parseFloat(element.amountValue
                                  .replace(/\./g, '')
                                  .replace(',', '.'))

            const results = -Math.abs(negativeFilter)
            return results
        }
    })

    function sumBalance() {
        const separator = positiveNums.filter(element => element !== undefined ? element : null)
        const accumulator = separator.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);

        return accumulator
    }

    function subBalance() {
        const separator = negativeNums.filter(element => element !== undefined ? element : null)
        const accumulator = separator.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);

        return accumulator
    }

    function totalBalance() {
        const mixArrays = positiveNums.concat(negativeNums)
        const separator = mixArrays.filter(element => element !== undefined ? element : null)
        const accumulator = separator.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);

        return accumulator.toFixed(2)
    }

    return(
        <DashBoardTotalContainer>
            <DashBoardTotalHeader>
                <h3>Valor total</h3>
                <Line />
            </DashBoardTotalHeader>

            <DashBoardBody>
                <p>
                    Total de gastos: R$ <StyledSpan color="red"> 
                                             {subBalance()}
                                        </StyledSpan>
                </p>

                <p>
                    Total de ganhos: R$ <StyledSpan color="green"> 
                                            {sumBalance()}
                                        </StyledSpan>
                </p>

                <p>
                    Saldo: R$ <StyledSpan>
                                {totalBalance()}
                              </StyledSpan>
                </p>
            </DashBoardBody>

        </DashBoardTotalContainer>
    )
}

