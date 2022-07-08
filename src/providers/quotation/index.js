import axios from "axios";
import {createContext, useEffect, useState} from "react";

const initialQuotation = "USD-BRL,EUR-BRL,BTC-BRL,EUR-USD,USD-JPY,USD-CAD"

export const QuotationContext = createContext([]);

export const QuotationProvider = ({children})=>{
    const [playQuot, setPlayQuot] = useState(false)
    const [valueConvert, setValueConvert] = useState("")
    const [quotation, setQuotation] = useState([]);
    const [listQuotation, setListQuotation] = useState([]);
    const [total, setTotal] = useState(0)
    const [display, setDisplay] = useState(false)

    const fetchApi = async () =>{
        await axios.get(`https://economia.awesomeapi.com.br/json/last/${initialQuotation}`)
        .then(response => {
            setListQuotation(response.data)
        })
        .catch(error => console.log(error))
    }
    const fetchQuot = async ()=>{
        await axios.get(`https://economia.awesomeapi.com.br/json/last/${valueConvert}-BRL`)
        .then(response => {
            setQuotation(response.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchApi()
    },[])

    useEffect(()=>{
        playQuot&&(
            fetchQuot()
        )
        setPlayQuot(false)
    },[playQuot])

    return(
        <QuotationContext.Provider value={{
            setPlayQuot, 
            quotation, 
            listQuotation, 
            valueConvert,
            setValueConvert, 
            total, 
            setTotal,
            display, 
            setDisplay
        }}>
            {children}
        </QuotationContext.Provider>
    )
}
