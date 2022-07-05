import { RiLoginBoxLine } from "react-icons/ri"

import "./style.css"

function LoginBtn() {
    return(
        <>
            <button id="login-btn">
                <RiLoginBoxLine />
                Entrar
            </button>
        </>
    )
}

export default LoginBtn