import Modal from "react-modal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../Input";
import Button from "../Button";
import SelectInput from "../SelectInput";

import { CloseModalBtn } from "../CloseModalBtn/style";
import { FlexComponent, FlexForm, Line } from "../LoginArea/styles";
import { ModalHeader } from "./style";
import ApiFake from "../../Service/api_fake";
import { GraficsContext } from "../../providers/grafics";

const EditPlanModal = ( { postId, handleModal, modal } ) => {
    const [entryType, setEntryType] = useState("Entrada");
    const [categoryType, setCategoryType] = useState("Moradia");
    const userID = localStorage.getItem("@YOURMONEY-USER")
    const token = localStorage.getItem("@YOURMONEY-TOKEN")
    const {data} = useContext(GraficsContext)   

    const dataEdit = data?.filter((el)=> parseInt(el.id)=== parseInt(postId))
    
    const valueTypeOptions = ["Gasto", "Ganho"];
    const categoryTypeOptions = [
      "Moradia",
      "Mercado",
      "Viagem",
      "Investimentos",
      "Salário",
      "Outros",
    ];
  
    const formSchema = yup.object().shape({
      entryName: yup
        .string()
        .required("Digite o nome da entrada"),

      description: yup
        .string()
        .required("Digite a descrição da entrada"),
  
      amountValue: yup
        .string()
        .required("Digite um valor"),
  
      date: yup
        .string()
        .required("Preencha com uma data"),
    });
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(formSchema) });
  
    const onSubmitFunction = (data) => {
      data.userId = userID
      data.entryType = entryType;
      data.categoryType = categoryType;

      const config = {
        headers: { "Authorization": `Bearer ${JSON.parse(token)}`}
      };

      console.log(postId)
  
      ApiFake
        .patch(`/financeiro/${postId}`, data, config)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
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
            <h3> Editar informações </h3>
            <CloseModalBtn onClick={handleModal}>
              X
            </CloseModalBtn>
          </FlexComponent>
          <Line />
        </ModalHeader>
  
        <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
          <FlexComponent 
            direction="column" 
            gap="10px" 
            className="data-content"
          >

            <Input
              label="Nome da entrada:"
              placeholder={dataEdit[0]?.nome}
              name="entryName"
              error={errors.entryName}
              register={register}
              //value={dataEdit[0]?.nome}
           />
  
            <Input
              label="Descrição:"
              //placeholder={dataEdit[0]?.descricao}
              name="description"
              error={errors.description}
              register={register}
              //value={parseFloat(dataEdit[0]?.descricao)}
            />
  
            <SelectInput
              label="Tipo de valor"
              name="valueType"
              setValue={setEntryType}
              error={errors.description}
              register={register}
              inputOptions={valueTypeOptions}
              //value={dataEdit[0]?.tipo}

            />
  
            <SelectInput
              label="Categoria"
              name="category"
              setValue={setCategoryType}
              error={errors.description}
              register={register}
              value={dataEdit[0]?.categoria}
              inputOptions={categoryTypeOptions}
            />
  
            <Input
              label="Valor:"
              placeholder={parseFloat(dataEdit[0]?.valor)}
              name="amountValue"
              error={errors.value}
              register={register}
              value={parseFloat(dataEdit[0]?.valor)}

            />
  
            <Input
              label="Data:"
              name="date"
              //placeholder={dataEdit.data}
              type="date"
              error={errors.date}
              register={register}
              //value={dataEdit[0].data}

            />
  
            <Button background="#38C172" width="100%" type="submit">
              Editar
            </Button>
          </FlexComponent>
        </FlexForm>
            <Button background="#e66060" width="100%">
              Deletar
            </Button>
      </Modal>
    );
  };
  
  export default EditPlanModal;







