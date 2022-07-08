import { createContext, useState } from "react";

export const CoinsContext = createContext([])

const initialCoins ={
    USD:"Dólar Americano",
    EUR:"Euro",
    CNY:"Yuan Chinês",
    CAD:"Dólar Canadense",
    JPY:"Iene Japonês",
    GBP:"Libra Esterlina",
    ARS:"Peso Argentino",
    CHF:"Franco Suíço",
    AUD:"Dólar Australiano",
    ILS:"Novo Shekel Israelense",    
}

export const CoinsProvider = ({children})=>{
    const [coins, setCoins] = useState(initialCoins)

    return(
        <CoinsContext.Provider value={{coins, setCoins}}>
            {children}
        </CoinsContext.Provider>
    )
}