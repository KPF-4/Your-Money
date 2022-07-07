import { QuotationProvider } from "./quotation"
import { CoinsProvider } from "./coins"

const Providers = ({children})=>{

    return(
        <CoinsProvider>
            <QuotationProvider>
                {children}
            </QuotationProvider>
        </CoinsProvider>
    ) 
        
    
}

export default Providers