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

const FinancialPlanModal = ( { financialPlanModal,  handleFinancialPlanModal} ) => {
  const userId = localStorage.getItem("@YOURMONEY-USER")
  const token = localStorage.getItem("@YOURMONEY-TOKEN")
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
    nome: yup.string().required("Digite o nome da entrada"),

    descricao: yup.string().required("Digite a descrição da entrada"),

    valor: yup.string().required("Digite um valor"),

    data: yup.string().required("Preencha com uma data"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  
  const onSubmitFunction = (data) => {
    const {nome, valor, date}= data

    const newData = {
      nome: nome,
      tipo: entryType,
      categoria: categoryType,
      valor: valor,
      data: date,
      userId: JSON.parse(userId),
    };    
    
    const config = {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    };    
    
    console.log(newData, config)    
      
    ApiFake.post("/financeiro", newData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      className="modal"
      contentLabel="onRequestClose"
      isOpen={financialPlanModal}
      onRequestClose={handleFinancialPlanModal}
    >
      <ModalHeader>
        <FlexComponent justify="space-between" wrap="now-wrap">
          <h3> Planejamento Financeiro </h3>
          <CloseModalBtn onClick={() => handleFinancialPlanModal()}>
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
            name="nome"
            error={errors.entryName}
            register={register}
          />

          <Input
            label="Descrição:"
            placeholder="Digite a descrição da entrada"
            name="descricao"
            error={errors.description}
            register={register}
          />

          <SelectInput
            label="Tipo de valor"
            name="tipo"
            error={errors.valueType}
            setValue={setEntryType}
            inputOptions={valueTypeOptions}
          />

          <SelectInput
            label="Categoria"
            name="categoria"
            error={errors.category}
            setValue={setCategoryType}
            inputOptions={categoryTypeOptions}
          />

          <Input
            label="Valor:"
            placeholder="R$"
            name="valor"
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

export default FinancialPlanModal