import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../Button";
import Input from "../Input";
import { ButtonConteiner, Container, FormContainder } from "./styles";
import { toast } from "react-toastify";

const Sup = () => {
  const history = useHistory();

  const shema = yup.object().shape({
    nome: yup
      .string()
      .required("Campo obrigatorio.")
      .min(6, "Mínimo 6 caracteres"),
    lastName: yup.string().required("Campo obrigatorio."),
    date: yup.string().required("Campo obrigatorio."),
    email: yup.string().required("Campo obrigatorio.").email("Email incalido"),
    repeatEmail: yup
      .string()
      .required("Campo obrigatorio.")
      .oneOf([yup.ref("email")], "Email não coincidem"),
    contact: yup.string().required("Campo obrigatorio."),
    text: yup.string().required("Campo obrigatorio."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shema) });

  const onSubmitFunction = (data) => {
    const resolve = new Promise((resolve, reject) => {
      setTimeout(resolve, 600);
      setTimeout(() => history.push("/"), 1500);
    });
    toast.promise(resolve, {
      pending: "Aguarde",
      success: "Mensagem enviada com sucesso",
      error: "Erro no servidor",
    });
  };

  return (
    <Container>
      <FormContainder>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label={"Nome"}
            error={errors.nome}
            register={register}
            name="nome"
            type="text"
            placeholder="Digite seu sobrenome."
          />
          <Input
            label={"Sobre nome"}
            register={register}
            error={errors.lastName}
            name="lastName"
            type="text"
            placeholder="Digite seu nome."
          />
          <Input
            label={"Data de Ocorrencia"}
            register={register}
            error={errors.date}
            name="date"
            type="Date"
          />
          <Input
            label={"Email"}
            register={register}
            name="email"
            type="email"
            error={errors.email}
            placeholder="Digite seu Email"
          />
          <Input
            label={"Repita o email"}
            register={register}
            type="email"
            name="repeatEmail"
            error={errors.repeatEmail}
            placeholder="Repita seu Email"
          />
          <Input
            label={"Contato"}
            register={register}
            name="contact"
            type="text"
            error={errors.contact}
            placeholder="Digite seu Contato"
          />
          <div>
            <label htmlFor="Problem">Descreva sobre o problema.</label>
            <textarea
              name="Problem"
              id=""
              cols="30"
              rows="10"
              placeholder="Digite a descrição do seu problema."
              {...register("text")}
            ></textarea>
            {errors.text && <span>{errors.text.message}</span>}
          </div>
          <ButtonConteiner>
            <Button width="70%" background="var(--green-button)">
              Enviar
            </Button>
          </ButtonConteiner>
        </form>
      </FormContainder>
    </Container>
  );
};

export default Sup;
