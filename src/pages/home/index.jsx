import DailyNews from "../../components/DailyNews/idnex";
import FeaturedNews from "../../components/FeaturedNews";
import Header from "../../components/Header";
import Quotation from "../../components/Quotation";
import { StyledHome } from "./styles";
import * as animationData from "../../assets/json-animate/Cotações-animation.json";
import Lottie from "react-lottie";

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
    <div>
      <Header />
      <StyledHome>
        <div className="container-home">
          <div className="cotacao-simualdor">
            <div id="cotacoes">
              <figure id="img-figure">
                <Lottie
                  height={"auto"}
                  options={defaultOptions}
                />
              </figure>
              <Quotation />
            </div>
            <div className="simulador" >
              <p>Simulador</p>
            </ div>
          </div> 
          <div className="news">
              <div className="noticiasDiarias">
                <DailyNews />
              </div>
              <div className="noticiasDestaque" >
                  <FeaturedNews />
              </ div>
          </div>
        </ div>
      </StyledHome>
      
    </div>
  );
};

export default Home;
