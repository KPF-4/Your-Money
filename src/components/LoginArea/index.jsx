import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { FlexComponent, FlexForm, Line } from "./styles";
import Button from "../Button";
import Input from "../Input";
import ApiFake from "../../Service/api_fake";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GraficsContext } from "../../providers/grafics";
import { useContext } from "react";

const LoginArea = () => {
  const {setPlayDashboard} = useContext(GraficsContext)

  const formSchema = yup.object().shape({
    email: yup.string().required("Digite seu email!").email("Email inválido"),

    password: yup.string().required("Digite sua senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history = useHistory();

  const onSubmitFunction = async (data) => {
    await ApiFake.post("/login", data)
      .then((res) => {
        const { accessToken, user} = res.data;
        localStorage.setItem("@YOURMONEY-USER", JSON.stringify(user.id));
        localStorage.setItem("@YOURMONEY-TOKEN", JSON.stringify(accessToken));
        setPlayDashboard(true)
        toast.success("Sucesso ao acessar sua conta");
        setTimeout(() => {
          return history.push("/dashboard");
        }, 2000);
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
      });
  };

  return (
    <section>
      <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
        <FlexComponent direction="column" gap="10px" className="data-content">
          <Input
            label="Email:"
            placeholder="Digite seu email"
            name="email"
            error={errors.email}
            register={register}
          />

          <Input
            label="Senha:"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={errors.password}
            register={register}
          />

          <FlexComponent justify="center" align="flex-end">
            <Button background="#3490DC" width="60%">
              Entrar
            </Button>
          </FlexComponent>
          <FlexComponent wrap="nowrap" gap="10px" align="center">
            <Line></Line>
            <p>ou</p>
            <Line></Line>
          </FlexComponent>
          <Link to="/registro">
            <FlexComponent justify="center">
              <Button background="#38C172" width="60%">
                Cadastre-se
              </Button>
            </FlexComponent>
          </Link>
        </FlexComponent>
      </FlexForm>
    </section>
  );
};

export default LoginArea;
