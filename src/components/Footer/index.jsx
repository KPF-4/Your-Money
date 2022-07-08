import { StyledFooter } from "./style"
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from 'react-icons/ai'
import { TiSocialInstagram } from 'react-icons/ti' 
import { GrFacebook } from 'react-icons/gr'


const Footer = () => {

  return (
    <StyledFooter>
        <div className="Footer-inicio">
            <p>Inicio </p>
            <Link to= "/" className="Footer-SobreNos" >Sobre nós</Link>
            <div className="Footer-redesSociais">
                <GrFacebook />
                <TiSocialInstagram  />
                <AiFillTwitterCircle />
            </div>
        </div>
        
        <div className="Footer-link">
            <Link to= "/" className="Footer-li">Home</Link>
            <Link to= "/" className="Footer-li">Cotação</Link>
            <Link to= "/" className="Footer-li">Simulador</Link>
            <Link to= "/" className="Footer-li">Noticais</Link>
        </div>
    </StyledFooter>
  )
}

export default Footer