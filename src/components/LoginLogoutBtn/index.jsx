import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { StyledButton } from "./style";

const LoginLogoutBtn = ({ isLogged, setToken }) => {

  const history = useHistory()

  const removeToken = () => {
    localStorage.removeItem("@YOURMONEY-USER")
    localStorage.removeItem("@YOURMONEY-TOKEN")
    history.push("/")
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
