import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";

export const LoginArea = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Digite seu email!").email("Email inválido"),
    password: yup.string().required("Digite sua senha!"),
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
        {errors.email && <p>{errors.email.message}</p>}
        <input placeholder="Senha" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <button>Entrar</button>
      </form>
      <span>
        <Link to="/registro">
          <button>Cadastre-se</button>
        </Link>
      </span>
    </section>
  );
};
