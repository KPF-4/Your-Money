import Header from "./components/Header";
import { Quotation } from "./components/Quotation";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Header />
        <Quotation/>
    </div>
  );
}

export default App;
