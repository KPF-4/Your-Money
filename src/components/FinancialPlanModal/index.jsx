import Modal from "react-modal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";
import { CloseModalBtn } from "../CloseModalBtn/style";
import { FlexComponent, FlexForm, Line } from "../LoginArea/styles";
import { ModalHeader } from "./style";
import ApiFake from "../../Service/api_fake";
import { useContext } from "react";
import { GraficsContext } from "../../providers/grafics";

export const FinancialPlanModal = ( { financialPlanModal,  handleFinancialPlanModal} ) => {
  const userId = localStorage.getItem("@YOURMONEY-ID")
  const token = localStorage.getItem("@YOURMONEY-TOKEN")

  const {setPlayDashboard} = useContext(GraficsContext)

  const valueTypeOptions = ["Ganho", "Gasto"];
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
    valueType: yup.string().required("Selecione o tipo"),
    description: yup.string().required("Digite a descrição da entrada"),
    categoryType: yup.string().required("Digite a descrição da entrada"),
    value: yup.number().typeError("Digite um valor").required("Digite um valor"),
    date: yup.string().required("Preencha com uma data"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  
  const onSubmitFunction = (data) => {
    const {entryName, valueType, categoryType, value, date}= data

    const newData = {
      nome: entryName,
      tipo: valueType,
      categoria: categoryType,
      valor: value,
      data: date,
      userId: userId,
    };    
    
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };       
    const resolve = new Promise((resolve, reject) => {
      ApiFake.post("/financeiro", newData, config)
      .then((res) => {
        setTimeout(resolve)
        setPlayDashboard(true)
        console.log(res)
      })
      .catch((err) => {
        setTimeout(reject)
        console.log(err)
      });
    })
      
    toast.promise(resolve, {
      pending: "Aguarde",
      success: "Sucesso ao acessar sua conta",
      error: "Email ou senha inválidos",
    })
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
            inputOptions={valueTypeOptions}
            register={register}
          />

          <SelectInput
            label="Categoria"
            name="categoryType"
            error={errors.categoryType}
            inputOptions={categoryTypeOptions}
            register={register}
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

          <Button background="#38C172" width="100%" type="submit">
            Cadastrar
          </Button>
        </FlexComponent>
      </FlexForm>
    </Modal>
  );
};