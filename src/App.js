import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
        autoClose={2500}
      />
      <Routes />
    </div>
  );
};

export default App;
