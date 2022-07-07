import Lottie from "react-lottie";
import CentralizedComponent from "../../components/CentralizedComponent";
import { LoginArea } from "../../components/LoginArea";
import * as animationData from "./animation.json";
import { FlexComponent } from "./styles";

function Login() {
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
      <FlexComponent gap="5px">
        <h1>Your Money</h1>
        <h2>Login</h2>
        <LoginArea />
      </FlexComponent>
    </CentralizedComponent>
  );
}

export default Login;
