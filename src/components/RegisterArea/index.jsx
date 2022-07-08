import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FlexComponent, FlexForm, Line } from "./styles";
import Input from "../Input";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../Button/styles";
import ApiFake from "../../Service/api_fake";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const RegisterArea = () => {
  const lowerCaseRegex = /(?=.*[a-z])/;
  const upperCaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const magicRegex = /\W|_/;

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .transform((value) => {
        value = value.split(" ").join("SPACE");
        return !value.match(numericRegex) && !value.match(magicRegex)
          ? value.split("SPACE").join(" ")
          : "";
      })
      .min(3, "Mínimo 3 caracteres")
      .required("Insira seu nome, apenas letras"),
    surname: yup
      .string()
      .transform((value) => {
        value = value.split(" ").join("SPACE");
        return !value.match(numericRegex) && !value.match(magicRegex)
          ? value.split("SPACE").join(" ")
          : "";
      })
      .min(2, "Mínimo 2 caracteres, apenas letras")
      .required("Insira seu sobrenome, apenas letras"),
    email: yup.string().required("Insira seu email").email("Email inválido"),
    confirmEmail: yup
      .string()
      .oneOf([yup.ref("email")], "Email diferente")
      .required("Confirme seu email"),
    contact: yup.string().required("Insira seu contato"),
    userName: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .required("Insira um nome de usuário"),
    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .matches(lowerCaseRegex, "Ao menos um minúsculo")
      .matches(upperCaseRegex, "Ao menos um maiúsculo")
      .matches(numericRegex, "Ao menos um número")
      .matches(magicRegex, "Um especial '!@#$'")
      .required("Escreva uma senha"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history = useHistory()

  const onSubmitFunction = (data) => {
    
    const {confirmEmail, confirmPassword,...newData} = data

    ApiFake
    .post("/register", newData)
    .then((res) =>{
      const { accessToken } = res.data
      localStorage.setItem("@TOKEN", JSON.stringify(accessToken))
      toast.success("Sucesso ao criar conta")
      setTimeout(() => {
        return history.push("/");
      }, 2000)
    })
    .catch((err) => {
      err.response.data='Email already exists'?
      toast.error("Usuário já cadastrado, tente outro email"):
      toast.error("Erro ao criar conta, tente outro email")
    })
    
  };

  return (
    <section>
      <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
        <FlexComponent direction="column" gap="10px" className="data-content">
          <Line width="60%">
            <h3>Dados pessoais</h3>
          </Line>

          <Input
            label="Nome:"
            placeholder="Digite seu nome"
            name="name"
            error={errors.name}
            register={register}
          />

          <Input
            label="Sobrenome:"
            placeholder="Digite seu sobrenome"
            name="surname"
            error={errors.surname}
            register={register}
          />

          <Input
            label="Email:"
            placeholder="Digite seu email"
            name="email"
            error={errors.email}
            register={register}
          />

          <Input
            label="Confirmar Email:"
            placeholder="Confirme seu Email"
            name="confirmEmail"
            error={errors.confirmEmail}
            register={register}
          />

          <Input
            label="Contato"
            placeholder="Digite seu contato"
            name="contact"
            error={errors.contact}
            register={register}
          />
        </FlexComponent>

        <FlexComponent direction="column" gap="10px" className="data-content">
          <Line width="60%">
            <h3>Dados cadastrais</h3>
          </Line>

          <Input
            label="Usuário:"
            placeholder="Digite seu usuário"
            name="userName"
            error={errors.userName}
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

          <Input
            label="Confirmar a senha:"
            placeholder="Confirme sua senha"
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword}
            register={register}
          />

          <FlexComponent justify="center" align="flex-end">
            <Button background="#38C172" width="60%">
              Cadastre-se
            </Button>
          </FlexComponent>
          <FlexComponent wrap="nowrap" gap="10px" align="center">
            <Line></Line>
            <p>ou</p>
            <Line></Line>
          </FlexComponent>
          <Link to="/login">
            <FlexComponent justify="center">
              <Button background="#3490DC" width="60%">
                Logue-se
              </Button>
            </FlexComponent>
          </Link>
        </FlexComponent>
      </FlexForm>
    </section>
  );
};
