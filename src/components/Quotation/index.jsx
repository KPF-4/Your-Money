import { useContext, useEffect, useState} from "react"
import { QuotationContext } from "../../providers/quotation"
import { CoinsContext } from "../../providers/coins";
import { StyleForm, StyleQuotation, StyleResult, StyleSpan } from "./style";
import { useForm } from "react-hook-form";

export const Quotation = ()=>{
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true});

    const {coins} = useContext(CoinsContext);
    const {setPlayQuot, quotation, listQuotation, valueConvert, setValueConvert} = useContext(QuotationContext);
    const names = Object.keys(listQuotation);
    const namesCoins = Object.keys(coins);
    const nameQuotation = Object.keys(quotation);

    const [inputValue, setInputValue] = useState(0);
    const [total, setTotal] = useState(0);
    const [display, setDisplay]= useState(false)

    const onSubmitConvert = async (data)=>{
        setInputValue(data.value)
        await setValueConvert(data.moeda)
        await setPlayQuot(true)
        setDisplay(true)
    }
    
    useEffect(()=>{
        setTotal(parseFloat(parseFloat(inputValue)*parseFloat(quotation[nameQuotation]?.ask)).toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[quotation])

    const handleBack = async ()=>{
        await setPlayQuot(false)
        setDisplay(false)
    }

    return(
        <>
            <StyleQuotation> 
                <h3 className="title">Cotação de Moedas</h3>
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

            {
                display === true
                ?
                <StyleResult>
                    <h3 className="title">Conversão de Moeda</h3>
                    <span>{valueConvert} {inputValue}</span>
                    <span>BRL {quotation[nameQuotation]?.ask}</span>
                    <span>O valor convertido é: {parseFloat(total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    <button onClick={handleBack}>Voltar</button>
                </StyleResult>
                :
                <StyleForm onSubmit={handleSubmit(onSubmitConvert)}>
                    <h3 className="title">Conversão de Moeda</h3>
                    <span>Selecione a Moeda</span>
                    <select {...register("moeda")}>
                        {namesCoins.map((el, index)=>
                            <option key={index} value={el}>{el+" / "+coins[el]}</option>
                            )}
                    </select>
                    <span>Qual o valor?</span>
                    <div>
                        <input placeholder={"Valor"} {...register("value", {required:"Digite o valor desejado!"})}/>
                        <button type="submit">Converter</button>
                    </div>
                </StyleForm>
            }
        </>
    )
    
}