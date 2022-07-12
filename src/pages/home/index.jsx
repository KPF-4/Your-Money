import Header from "../../components/Header";
import Quotation from "../../components/Quotation";
import { StyledHome } from "./styles";
import * as animationData from "../../assets/json-animate/Cotações-animation.json";
import Lottie from "react-lottie";
import Footer from "../../components/Footer";
import NewsArea from "../../components/NewsArea";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledHome>
      <Header />
      <div className="container-home">
        <div className="cotacao-simualdor">
          <div id="cotacoes">
            <figure id="img-figure">
              <Lottie height={"auto"} options={defaultOptions} />
            </figure>
            <Quotation />
          </div>
          <div className="simulador">
            <p>Simulador</p>
          </div>
        </div>
        <NewsArea />
      </div>
      <Footer />
    </StyledHome>
  );
};

export default Home;
