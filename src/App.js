import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      <Routes />
    </div>
  );
};

export default App;
