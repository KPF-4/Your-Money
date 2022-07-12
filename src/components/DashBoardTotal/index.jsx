import { Line } from "../LoginArea/styles"
import { DashBoardTotalContainer,
         DashBoardTotalHeader,
         DashBoardBody } from "./style"

export const DashBoardTotal = ( { data } ) => {

    const positiveNums = data.map(element => {
        if (element.entryType === "Entrada") {
            const positiveFilter = parseFloat(element.amountValue
                                  .replace(/\./g, '')
                                  .replace(',', '.'))


            return positiveFilter
        }
    })

    console.log(positiveNums)

    const negativeNums = data.map(element => {
            if (element.entryType === "Saída") {
            const negativeFilter = parseFloat(element.amountValue
                                  .replace(/\./g, '')
                                  .replace(',', '.'))

            const results = -Math.abs(negativeFilter) !== undefined ? 
            (console.log("esses são diferentes")
            ) : 
            (console.log("esses são diferentes")
            )
            

            return results
        }
    })

    console.log(negativeNums)

    function sumBalance() {
        const accumulator = positiveNums.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);
            return accumulator
    }

    function subBalance() {
        const accumulator = negativeNums.reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);
            return accumulator
    }
 
   /* console.log(sumBalance())
    console.log(subBalance())*/

    return(
        <DashBoardTotalContainer>
            <DashBoardTotalHeader>
                <h3>Valor total</h3>
                <Line />
            </DashBoardTotalHeader>

            <DashBoardBody>
                <p>
                    Total de gastos: R$ <span> </span>
                </p>

                <p>
                    Total de ganhos: R$ <span> </span>
                </p>

                <p>
                    Valor total: R$ <span> </span>
                </p>
            </DashBoardBody>

        </DashBoardTotalContainer>
    )
}

