import Modal from "react-modal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input";
import SelectInput from "../SelectInput";
import { Button } from "../Button/styles";
import { CloseModalBtn } from "../CloseModalBtn/style";
import { FlexComponent, FlexForm, Line } from "../LoginArea/styles";
import { ModalHeader } from "./style";

const FinancialPlanModal = () => {
  const [modal, setModal] = useState(true);

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
    entryName: yup.string().required("Digite o nome da entrada"),

    description: yup.string().required("Digite a descrição da entrada"),

    amountValue: yup.string().required("Digite um valor"),

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
  }

  const onSubmitFunction = (data) => {
    data.entryType = entryType;
    data.categoryType = categoryType;

    console.log(data);
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
          <CloseModalBtn onClick={handleModal}>
            X
          </CloseModalBtn>
        </FlexComponent>
        <Line />
      </ModalHeader>

      <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
        <FlexComponent direction="column" gap="10px" className="data-content">
          <Input
            label="Nome da entrada:"
            placeholder="Digite o nome da entrada"
            name="entryName"
            error={errors.entryName}
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
            name="valueType"
            error={errors.valueType}
            setValue={setEntryType}
            inputOptions={valueTypeOptions}
          />

          <SelectInput
            label="Categoria"
            name="category"
            error={errors.category}
            setValue={setCategoryType}
            inputOptions={categoryTypeOptions}
          />

          <Input
            label="Valor:"
            placeholder="R$"
            name="amountValue"
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

          <Button background="#38C172" width="100%" type="submit">
            Cadastrar
          </Button>
        </FlexComponent>
      </FlexForm>
    </Modal>
  );
};

export default FinancialPlanModal;