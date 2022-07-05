import { RiLogoutBoxLine } from "react-icons/ri"

import "./style.css"

function LogoutBtn() {
    return(
        <>
            <button id="logout-btn">
                <RiLogoutBoxLine />
                Sair
            </button>
        </>
    )
}

export default LogoutBtn