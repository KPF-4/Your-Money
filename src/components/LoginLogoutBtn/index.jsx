import { useState } from "react";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import { StyledButton, UserOptions } from "./style";

const LoginLogoutBtn = ({ isLogged, setToken }) => {
  const [showOptions, setShowOptions] = useState(false);

  const history = useHistory()

  const removeToken = () => {
    localStorage.removeItem("@YOURMONEY-TOKEN");
    localStorage.removeItem("@YOURMONEY-ID");
    history.push("/")
    setToken("");
  };

  return (
    <>
      <StyledButton onClick={() => setShowOptions(!showOptions)}>
        {isLogged ? (
          <>
            <div>
              <BiUser viewBox="1 -1 24 24" />
            </div>
            <UserOptions
              showOptions={showOptions}
            >
              <p onClick={removeToken}>Sair</p>
              <Link to="/dashboard">Simulação</Link>
            </UserOptions>
          </>
        ) : (
          <>
            <RiLoginBoxLine />
            Entrar
            <UserOptions
              showOptions={showOptions}
            >
              <Link to="/login">Login</Link>
              <Link to="/registro">Cadastro</Link>
            </UserOptions>
          </>
        )}
      </StyledButton>
      <></>
    </>
  );
};

export default LoginLogoutBtn;
