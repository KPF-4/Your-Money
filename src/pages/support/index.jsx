import Header from "../../components/Header";
import Sup from "../../components/Sup";
import * as support from "../../assets/json-animate/support-animate.json";
import Lottie from "react-lottie";
import { Title } from "./style";

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
      <div id="sup">
        <div>
          <figure>
            <Lottie height={"auto"} options={defaultOptions} />
          </figure>
        </div>
        <Sup />
      </div>
    </>
  );
};
export default Support;
