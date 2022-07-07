import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FlexComponent, FlexForm, Line } from "./styles";
import { Button } from "../Button/styles";
import Input from "../Input";

export const LoginArea = () => {
  const formSchema = yup.object().shape({
    email: yup.string()
              .required("Digite seu email!")
              .email("Email inválido"),
              
    password: yup.string()
                 .required("Digite sua senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmitFunction = (data) => {
    console.log(data);
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
