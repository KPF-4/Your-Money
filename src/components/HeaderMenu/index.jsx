import { Line, StyledMenu } from "./styles";
import { GoGraph } from "react-icons/go";
import { BsGraphUp, BsChatLeftDots } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const HeaderMenu = ({ showMenu }) => {
  const [closeMenu, setCloseMenu] = useState(true);

  useEffect(() => {
    if (!showMenu) {
      setTimeout(() => {
        setCloseMenu(true);
      }, 250);
    } else {
      setCloseMenu(false);
      setTimeout(() => {
        setCloseMenu(false);
      }, 240);
    }
  }, [showMenu]);

  const history = useHistory();
  console.log(history.location.pathname);

  return (
    <StyledMenu closeMenu={closeMenu} showMenu={showMenu}>
      {history.location.pathname === "/dashboard" ? (
        <>
          <div>
            <Link to="/">
              <Line id="flexHome">
                <p>Home</p>
              </Line>
            </Link>
          </div>
          <div>
            <Link to="/simulador">
              <GoGraph />
              <p>Simulador</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/cotacao">
              <BsGraphUp />
              <p>Cotação</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/noticias">
              <BiNews />
              <p>Notícias</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/suporte">
              <BsChatLeftDots />
              <p>Suporte</p>
              <span></span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/simulador">
              <GoGraph />
              <p>Simulador</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/cotacao">
              <BsGraphUp />
              <p>Cotação</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/noticias">
              <BiNews />
              <p>Notícias</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/suporte">
              <BsChatLeftDots />
              <p>Suporte</p>
              <span></span>
            </Link>
          </div>
        </>
      )}
    </StyledMenu>
  );
};

export default HeaderMenu;
