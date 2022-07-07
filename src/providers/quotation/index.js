import axios from "axios";
import {createContext, useEffect, useState} from "react";

const initialQuotation = "USD-BRL,EUR-BRL,BTC-BRL,EUR-USD,USD-JPY,USD-CAD"

export const QuotationContext = createContext([]);

export const QuotationProvider = ({children})=>{
    const [valueConvert, setValueConvert] = useState("")
    const [quotation, setQuotation] = useState([]);
    const [listQuotation, setListQuotation] = useState([]);

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
        fetchQuot()
    },[valueConvert])

    return(
        <QuotationContext.Provider value={{quotation, listQuotation, setValueConvert}}>
            {children}
        </QuotationContext.Provider>
    )
}
