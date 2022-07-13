import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../Input";
import SelectInput from "../SelectInput";
import Button from "../Button";
import { CloseModalBtn } from "../CloseModalBtn/style";
import { Container, ModalHeader, StyleForm, StyleModal } from "./style";
import ApiFake from "../../Service/api_fake";
import { useContext } from "react";
import { GraficsContext } from "../../providers/grafics";
import { ModalContext} from "../../providers/modals";

export const FinancialPlanModal = () => {
  const userId = localStorage.getItem("@YOURMONEY-ID")
  const token = localStorage.getItem("@YOURMONEY-TOKEN")

  const {setPlayDashboard} = useContext(GraficsContext)
  const {setAdd} = useContext(ModalContext)

  const handleCloseAdd =()=>{
    setAdd(false);
  }

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
    const {entryName, description, valueType, categoryType, value, date}= data

    const newData = {
      nome: entryName,
      tipo: valueType,
      descricao: description,
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
    <Container onClick={handleCloseAdd}>
      <StyleModal onClick={(e)=> e.stopPropagation()}>
        <ModalHeader>
            <h3> Planejamento Financeiro </h3>
            <button className="close" onClick={handleCloseAdd}>
              X
            </button>
        </ModalHeader>
        <StyleForm onSubmit={handleSubmit(onSubmitFunction)}>
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
            <div className="valueDate">
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
            </div>

            <Button background="#38C172" width="100%" type="submit">
              Cadastrar
            </Button>
        </StyleForm>
      </StyleModal>
    </Container>
  );
};