import CentralizedComponent from "../../components/CentralizedComponent";
import { RegisterArea } from "../../components/RegisterArea";
import { FlexComponent } from "./styles";
import Lottie from "react-lottie";
import * as animationData from "../../assets/json-animate/Register-animation.json";
import { Link } from "react-router-dom";

const Register = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <CentralizedComponent>
      <figure>
        <Lottie
          height={"auto"}
          options={defaultOptions}
          isStopped={false}
          isPaused={false}
        />
      </figure>
      <FlexComponent gap="16px">
        <Link to="/">
          <h1>Your Money</h1>
        </Link>
        <h2>Cadastro</h2>
        <RegisterArea />
      </FlexComponent>
    </CentralizedComponent>
  );
}

export default Register;
