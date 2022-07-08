import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import LoginLogoutBtn from "../LoginLogoutBtn";
import { StyledHeader } from "./style";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@YOURMONEY-TOKEN"));
  const redirectButtons = ["Simulador", "Cotação", "Notícias", "Suporte"];

  useEffect(() => {

    token ? setIsLogged(true) : setIsLogged(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <StyledHeader>
      <div id="header-container">
        <AiOutlineMenuUnfold id="menu-icon" />
        <Link to="/">
          <h1>Your Money</h1>
        </Link>

        <div id="links-area">
          <div id="redirectBtns-container">
            {redirectButtons.map((element, index) => (
              <Link
                key={index}
                to={element
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()}
              >
                <button className="redirectBtn">{element}</button>
              </Link>
            ))}
          </div>

          <div id="login-logout-container">
            <LoginLogoutBtn setToken={setToken} isLogged={isLogged} />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
