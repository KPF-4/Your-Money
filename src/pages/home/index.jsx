import Header from "../../components/Header";
import Quotation from "../../components/Quotation";
import { StyledHome } from "./styles";
import * as animationData from "../../assets/json-animate/Cotações-animation.json";
import Lottie from "react-lottie";
import Footer from "../../components/Footer";
import NewsArea from "../../components/NewsArea";
import Investment from "../../components/Investment";

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
    <StyledHome id="home">
      <Header />
      <div className="container-home">
        <div className="cotacao-simualdor">
          <div id="cotacoes">
            <figure id="img-figure">
              <Lottie height={"auto"} options={defaultOptions} />
            </figure>
            <Quotation />
          </div>
          <div id="simulador">
            <figure>Lottie</figure>
            <Investment />
          </div>
        </div>
        <NewsArea />
      </div>
      <Footer />
    </StyledHome>
  );
};

export default Home;
