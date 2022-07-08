import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { StyledButton } from "./style";

const LoginLogoutBtn = ({ isLogged, setToken }) => {

  const removeToken = () => {
    localStorage.removeItem("@TOKEN")
    setToken("")
  }

  return (
    <>
      <StyledButton >
        {isLogged ? (
          <p onClick={removeToken}>
            <RiLogoutBoxLine />
            Sair
          </p>
        ) : (
          <Link to="/login">
            <RiLoginBoxLine />
            Entrar
          </Link>
        )}
      </StyledButton>
    </>
  );
};

export default LoginLogoutBtn;
