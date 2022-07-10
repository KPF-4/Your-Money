import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { GraficsContext } from "../../providers/grafics"


export const Grafics= async ()=>{
    
    const token = localStorage.getItem("@YOURMONEY-TOKEN")
    const id = localStorage.getItem("@YOURMONEY-USER")

    const history = useHistory()
    console.log(token, id)
    

    if(token){
        return(
        <>
        </>
    )
    } else {
        history.push("/")
    }
}