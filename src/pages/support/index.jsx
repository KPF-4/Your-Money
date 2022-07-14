import Header from "../../components/Header";
import Sup from "../../components/Sup";
import * as support from "../../assets/json-animate/support-animate.json";
import Lottie from "react-lottie";
import { SuportArea, Title } from "./style";
import Footer from "../../components/Footer";

const Support = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: support,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Header />
      <Title>
        <h1>Suporte Yuor Money</h1>
      </Title>
      <SuportArea>
        <div id="sup">
          <figure>
            <Lottie height={"auto"} options={defaultOptions} />
          </figure>
          <Sup />
        </div>
      </SuportArea>
      <Footer />
    </>
  );
};
export default Support;
