import { StyledFooter } from "./style";
import { Link, useHistory } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoFacebook } from "react-icons/io";
import { useEffect, useState } from "react";

const Footer = () => {
  const history = useHistory();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    history.location.pathname === "/" ? setIsHome(true) : setIsHome(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledFooter>
      <section>
        <p>Início</p>
        <div>
          {isHome ? (
            <>
              <a href="#home">Home</a>
              <a href="#cotacao">Cotação</a>
              <a href="#simulador">Simulador</a>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/">Cotação</Link>
              <Link to="/">Simulador</Link>
            </>
          )}
          {history.location.pathname === "/noticias" ? (
            <a href="#noticias">Notícias</a>
          ) : (
            <Link to="/noticias">Notícias</Link>
          )}
        </div>
      </section>
      <section>
        <p>
          <Link to="/sobreNos" id="sobre">Sobre nós</Link>
        </p>
      </section>
      <section className="redesSociais">
        <IoLogoFacebook />
        <TiSocialInstagram />
        <AiFillTwitterCircle />
      </section>
    </StyledFooter>
  );
};

export default Footer;
