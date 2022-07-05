import { AiOutlineMenuUnfold } from "react-icons/ai"
import LogoutBtn from "../Logout-btn"
import LoginBtn from "../Login-btn"
import { Link } from "react-router-dom"

import "./style.css"

function Header() {
    const token = localStorage.getItem("@TOKEN")

    //font-family: 'Lobster', cursive;
    //font-family: 'Inter', sans-serif;
    return(
    
        <header>
            <nav>
                <Link to="/">
                    <button id="to-home-btn"> Your Money </button>
                </Link>
            </nav>

            <div id="search-area">
                <div id="login-logout-div">
                    {token === null ? (
                        <LoginBtn />
                    ) : (
                        <LogoutBtn />
                    )}
                </div>
                
                <div id="search-input-div">
                    <input  placeholder="Pesquise aqui"
                            type="text" />
                    <button id="search-btn"> Buscar </button>
                </div>
            </div>
        </header>
    )
}

export default Header