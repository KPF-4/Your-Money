import { createContext, useEffect, useState } from "react";
import axios from "axios";
import ApiFake from "../../Service/api_fake";

export const GraficsContext = createContext([])

export const GraficsProvider = ({children})=>{
    const [playDashboad, setPlayDashboard] = useState(false)
    const [data, setData] = useState([])

    const token = localStorage.getItem("@YOURMONEY-TOKEN")
    const id = localStorage.getItem("@YOURMONEY-USER")

    const requisition = async ()=> {
        await ApiFake.get(`/financeiro?userId=${JSON.parse(id)}`,
        {
            headers: {
                "Authorization": `Bearer ${JSON.parse(token)}`
            }
        }
            
        )
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        playDashboad&&
            requisition()
            setPlayDashboard(false)
    },[playDashboad])

    return(
        <GraficsContext.Provider value={{setPlayDashboard, data, setData}}>
            {children}
        </GraficsContext.Provider>
    )
}