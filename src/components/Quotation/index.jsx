import { useContext, useEffect, useState} from "react"
import { QuotationContext } from "../../providers/quotation"
import { CoinsContext } from "../../providers/coins";
import { StyleForm, StyleQuotation, StyleSpan } from "./style";
import { useForm } from "react-hook-form";

export const Quotation = ()=>{
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true})

    const {coins} = useContext(CoinsContext);
    const {quotation, listQuotation, setValueConvert} = useContext(QuotationContext);
    const names = Object.keys(listQuotation)
    const namesCoins = Object.keys(coins)
    const nameQuotation = Object.keys(quotation)

    const [inputValue, setInputValue] = useState(0)
    const [total, setTotal] = useState(0)

    const onSubmitConvert = (data)=>{
        setInputValue(data.value)
        setValueConvert(data.moeda)
    }
    console.log(quotation)
    const TotalConvert = ()=>{
        const quotationValue = quotation[nameQuotation]?.ask
        console.log(quotationValue)
    }
    useEffect(()=>{
        TotalConvert()
    },[inputValue])

    return(
        <StyleQuotation onSubmit={handleSubmit(onSubmitConvert)}> 
            <StyleForm>
                <h3>Conversão de Moeda</h3>
                <input placeholder={"Valor em Reais"} {...register("value", {required:"Digite o valor desejado!"})}/>
                <select {...register("moeda")}>
                    {namesCoins.map((el, index)=>
                        <option key={index} value={el}>{el+" / "+coins[el]}</option>
                    )}
                </select>
                <button type="submit">Converter</button>
            </StyleForm>
            {
                
            }
            <div className="title">
                <h3>Cotação de Moedas</h3>
            </div>
            <div className="list-titles">
                <StyleSpan color="#008000">Compra</StyleSpan>
                <StyleSpan color="#FF0000">Venda</StyleSpan>
                <StyleSpan>Variação(%)</StyleSpan>
            </div>
            {names.map((el, index)=>
                <div key={index} className="list">
                    <StyleSpan type="coin">{listQuotation[el].code+"/"+listQuotation[el].codein}</StyleSpan>
                    <StyleSpan type="bid" color="#008000">{listQuotation[el].bid}</StyleSpan>
                    <StyleSpan type="ask" color="#FF0000">{listQuotation[el].ask}</StyleSpan>
                    <StyleSpan type="var" color={listQuotation[el].pctChange > 0?"#008000": "#FF0000"}>
                        {parseFloat(listQuotation[el].pctChange).toFixed(2)+"%"}
                    </StyleSpan>
                </div>
            )}
        </StyleQuotation>
    )
    
}