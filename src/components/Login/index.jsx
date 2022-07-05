import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = () => {
  const lowerCaseRegex = /(?=.*[a-z])/;
  const upperCaseRegex = /(?=.*[A-Z])/;
  const numericRegex = /(?=.*[0-9])/;
  const magicRegex = /\W|_/;

  const formSchema = yup.object().shape({
    
    email: yup.string().required("Digite seu email!").email("Email inválido"),
    password: yup
      .string()
      .required("Digite sua senha!")
      .min(6, "Mínimo 6 caracteres")
      .matches(lowerCaseRegex, "Ao menos um minúsculo")
      .matches(upperCaseRegex, "Ao menos um maiúsculo")
      .matches(numericRegex, "Ao menos um número")
      .matches(magicRegex, "Um especial '!@#$'"),
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
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Email" {...register("email")} />
        {errors.email &&  <p>{errors.email.message}</p>}
        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password &&  <p>{errors.password.message}</p>}
        <button>Entrar</button>
      </form>
      <span>
        Não tem conta? <button onClick={() => console.log(errors)}>Cadastre-se</button>
      </span>
    </section>
  );
};