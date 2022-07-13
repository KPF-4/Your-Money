import { Line, StyledMenu } from "./styles";
import { GoGraph } from "react-icons/go";
import { BsGraphUp, BsHeadset } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const HeaderMenu = ({ showMenu, handleMenu }) => {
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

  return (
    <StyledMenu closeMenu={closeMenu} showMenu={showMenu}>
      {history.location.pathname === "/" ? (
        <>
          <div>
            <Link to="/dashboard">
              <GoGraph />
              <p>Simulador</p>
              <span></span>
            </Link>
          </div>
          <div>
            <a href="#cotacao" onClick={handleMenu}>
              <BsGraphUp />
              <p>Cotação</p>
              <span></span>
            </a>
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
              <BsHeadset />
              <p>Suporte</p>
              <span></span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/">
              <Line id="flexHome">
                <p>Home</p>
              </Line>
            </Link>
          </div>
          <div>
            <Link to="/dashboard">
              <GoGraph />
              <p>Simulador</p>
              <span></span>
            </Link>
          </div>
          <div>
            <Link to="/">
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
              <BsHeadset />
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
