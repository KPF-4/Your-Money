import { createContext, useEffect, useState } from "react";
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
        .then(response => {
            setData(response.data)
            setPlayDashboard(false)

        })
        .catch(error => {
            console.log(error)
            setPlayDashboard(false)
        })
    }

    useEffect(()=>{
        playDashboad&&
            requisition()
    },[playDashboad])

    return(
        <GraficsContext.Provider value={{setPlayDashboard, data}}>
            {children}
        </GraficsContext.Provider>
    )
}