import {
  StyleModal,
  Container,
  ModalHeader,
  StyleForm,
  StyleEdit,
} from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../Button";

import ApiFake from "../../Service/api_fake";
import { GraficsContext } from "../../providers/grafics";
import { ModalContext } from "../../providers/modals";

const EditPlanModal = () => {
  const token = localStorage.getItem("@YOURMONEY-TOKEN");

  const { setPlayDashboard, data } = useContext(GraficsContext);
  const { setEdit, postId } = useContext(ModalContext);

  const dataEdit = data?.filter((el) => parseInt(el.id) === parseInt(postId));

  const handleCloseEdit = () => {
    setEdit(false);
  };

  const formSchema = yup.object().shape({
    description: yup.string().required("Digite a descrição da entrada"),
    value: yup
      .number()
      .typeError("Digite um valor")
      .required("Digite um valor"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const onSubmitFunction = (data) => {
    const { description, value } = data;

    const newData = {
      descricao: description,
      valor: value,
    };

    const resolve = new Promise((resolve, reject) => {
      ApiFake.patch(`/financeiro/${postId}`, newData, config)
        .then((res) => {
          setTimeout(resolve);
          setPlayDashboard(true);
          console.log(res);
          handleCloseEdit()
        })
        .catch((err) => {
          setTimeout(reject);
          console.log(err);
        });
    });

    toast.promise(resolve, {
      pending: "Aguarde",
      success: "Sucesso ao editar",
      error: "Erro ao editar",
    });
  };

  const handleDelete = (event) => {
    event.preventDefault()
    const resolve = new Promise((resolve, reject) => {
      ApiFake.delete(`/financeiro/${postId}`, config)
        .then((res) => {
          setTimeout(resolve);
          setPlayDashboard(true);
          console.log(res);
          handleCloseEdit()
        })
        .catch((err) => {
          setTimeout(reject);
          console.log(err);
        });
    });

    toast.promise(resolve, {
      pending: "Aguarde",
      success: "Deletado com sucesso",
      error: "Erro ao deletar",
    });
    
  };

  return (
    <Container onClick={handleCloseEdit}>
      <StyleModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h3> Editar informações </h3>
          <button className="close" onClick={handleCloseEdit}>
            X
          </button>
        </ModalHeader>

        <StyleForm onSubmit={handleSubmit(onSubmitFunction)}>
          <StyleEdit>
            <div className="inputEdit">
              <span className="labelEdit">Nome da entrada:</span>
              <span>{dataEdit[0]?.nome}</span>
            </div>

            <label htmlFor="description">Descrição:</label>
            <input
              placeholder={dataEdit[0]?.descricao}
              {...register("description")}
            />
            {errors.description && <span>{errors.description.message}</span>}

            <div className="inputEdit">
              <span className="labelEdit">Tipo de valor:</span>
              <span>{dataEdit[0]?.tipo}</span>
            </div>

            <div className="inputEdit">
              <span className="labelEdit">Categoria:</span>
              <span>{dataEdit[0]?.categoria}</span>
            </div>
            <label htmlFor="value">Valor:</label>
            <input placeholder={dataEdit[0]?.valor} {...register("value")} />
            {errors.value && <span>{errors.value.message}</span>}

            <div className="inputEdit">
              <span className="labelEdit">Data:</span>
              <span>{dataEdit[0]?.data}</span>
            </div>
          </StyleEdit>
          <div>
            <Button background="var(--green-button)" width="100%" type="submit">
              Editar
            </Button>
            <Button onClick={handleDelete} background="#e66060" width="100%">
              Deletar
            </Button>
          </div>
        </StyleForm>
      </StyleModal>
    </Container>
  );
};

export default EditPlanModal;
