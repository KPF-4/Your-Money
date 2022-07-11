import { useHistory } from "react-router-dom"
import { Grafics } from "../../components/Grafics"
import Header from "../../components/Header"

const Dashboard = ()=>{

    const token = localStorage.getItem("@YOURMONEY-TOKEN")
    const id = localStorage.getItem("@YOURMONEY-USER")

    const history = useHistory()

    if(token && id){
        return(
            <>
                <Header/>
                <Grafics/>
            </>
        )
    } else {
        history.push("/login")
    }
    
}

export default Dashboard