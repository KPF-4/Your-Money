import Modal from "react-modal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";
import { CloseModalBtn } from "../CloseModalBtn/style";
import { FlexComponent, FlexForm, Line } from "../LoginArea/styles";
import { ModalHeader } from "./style";
import ApiFake from "../../Service/api_fake";

const FinancialPlanModal = () => {
  const [modal, setModal] = useState(true);
  const userToken = localStorage.getItem("@YOURMONEY-TOKEN");
  const userID = localStorage.getItem("@YOURMONEY-ID");

  const [entryType, setEntryType] = useState("Entrada");
  const [categoryType, setCategoryType] = useState("Moradia");

  const valueTypeOptions = ["Entrada", "Saída"];
  const categoryTypeOptions = [
    "Moradia",
    "Mercado",
    "Viagem",
    "Investimento",
    "Salário",
    "Outros",
  ];

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite o nome da entrada"),

    description: yup.string().required("Digite a descrição da entrada"),

    value: yup.string().required("Digite um valor"),

    date: yup.string().required("Preencha com uma data"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const onSubmitFunction = (data) => {
    const remainingData = {
      userId: userID,
      entryType: entryType,
      categoryType: categoryType,
    };

    const config = {
      headers: { Authorization: `Bearer ${userToken}` },
    };

    const newData = Object.assign(data, remainingData);

    ApiFake.post("/financeiro", newData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      className="modal"
      contentLabel="onRequestClose"
      isOpen={modal}
      onRequestClose={handleModal}
    >
      <ModalHeader>
        <FlexComponent justify="space-between" wrap="now-wrap">
          <h3> Planejamento Financeiro </h3>
          <CloseModalBtn onClick={handleModal}>X</CloseModalBtn>
        </FlexComponent>
        <Line />
      </ModalHeader>

      <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
        <FlexComponent direction="column" gap="10px" className="data-content">
          <Input
            label="Nome da entrada:"
            placeholder="Digite o nome da entrada"
            name="name"
            error={errors.name}
            register={register}
          />

          <Input
            label="Descrição:"
            placeholder="Digite a descrição da entrada"
            name="description"
            error={errors.description}
            register={register}
          />

          <SelectInput
            label="Tipo de valor"
            name="entryType"
            setValue={setEntryType}
            inputOptions={valueTypeOptions}
          />

          <SelectInput
            label="Categoria"
            name="categoryType"
            setValue={setCategoryType}
            inputOptions={categoryTypeOptions}
          />

          <Input
            label="Valor:"
            placeholder="R$"
            name="value"
            error={errors.value}
            register={register}
          />

          <Input
            label="Data:"
            name="date"
            type="date"
            error={errors.date}
            register={register}
          />

          <Button background="var(--green-button)" width="100%" type="submit">
            Cadastrar
          </Button>
        </FlexComponent>
      </FlexForm>
    </Modal>
  );
};

export default FinancialPlanModal;
