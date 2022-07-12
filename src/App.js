import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        autoClose={2500}
      />
      <Routes />
    </>
  );
};

export default App;
