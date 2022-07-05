import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FlexForm } from "./styles";

export const Register = () => {
  const lowerCaseRegex = /(?=.*[a-z])/;
  const upperCaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const magicRegex = /\W|_/;

  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .min(3, "Mínimo 3 caracteres")
      .required("Insira um nome de usuário"),
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
    email: yup.string().required("Insira seu email").email("Email inválido"),
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

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <section>
      <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Usuário" {...register("userName")} />
        {errors.userName && <p>{errors.userName.message}</p>}
        <input placeholder="Nome" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <input placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          placeholder="Confirmar Senha"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button>Cadastrar</button>
      </FlexForm>
      <span>
        Já tem conta? <button onClick={() => console.log(errors)}>Entre</button>
      </span>
    </section>
  );
};
