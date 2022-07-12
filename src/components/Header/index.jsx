import { useContext } from "react";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ScrollContext } from "../../providers/scroll";
import HeaderMenu from "../HeaderMenu";
import LoginLogoutBtn from "../LoginLogoutBtn";
import { StyledHeader } from "./style";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@YOURMONEY-TOKEN"));
  const redirectButtons = ["Simulador", "Cotação", "Notícias", "Suporte"];

  const { scroll } = useContext(ScrollContext);

  useEffect(() => {
    token ? setIsLogged(true) : setIsLogged(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledHeader rotation={showMenu} scroll={scroll}>
      <div id="header-container">
        <AiOutlineMenuUnfold onClick={handleMenu} id="menu-icon" />

        <Link to="/">
          <h1>Your Money</h1>
        </Link>

        <div id="links-area">
          <div id="redirectBtns-container">
            {redirectButtons.map((element, index) => {
              return element === "Cotação" ? (
                <a key={index} href="#cotacao">
                  <button className="redirectBtn">{element}</button>
                </a>
              ) : (
                <Link
                  key={index}
                  to={
                    element === "Simulador"
                      ? "/dashboard"
                      : element
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .toLowerCase()
                  }
                >
                  <button className="redirectBtn">{element}</button>
                </Link>
              );
            })}
          </div>

          <div id="login-logout-container">
            <LoginLogoutBtn setToken={setToken} isLogged={isLogged} />
          </div>
        </div>
      </div>
      <HeaderMenu showMenu={showMenu} handleMenu={handleMenu} />
    </StyledHeader>
  );
};

export default Header;
