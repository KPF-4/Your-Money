import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SimulatorContext = createContext([]);
export const SimulatorProvider = ({ children }) => {
  const [months, setMonths] = useState(0);
  const [value, setValue] = useState(0);
  const [valueinitial, setInitialvalue] = useState(0);
  const [render, setRender] = useState(false);
  const [treasur, setTreasur] = useState("");
  const [name, setName] = useState("");

  const schema = yup.object().shape({
    treasureValue: yup
      .string()
      .transform((value) => (value === "DEFAULT" ? undefined : value))
      .required("Campo obrigatorio."),
    nameAplication: yup.string().required("Campo obrigatorio."),
    initialValue: yup.string().required("Campo obrigatorio."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitFunction = (data) => {
    setInitialvalue(Number(data.initialValue));
    const treasure = data.treasureValue.split("-");
    setRender(true);
    setTreasur(treasure);
    setName(data.nameAplication);

    switch (months) {
      case 360:
        const calc360 =
          Number(data.initialValue) * (1 + Number(treasure[0])) * (7253 / 252);
        setValue(calc360);
        break;
      case 60:
        const calc60 =
          Number(data.initialValue) * (1 + Number(treasure[0])) * (1257 / 252);
        setValue(calc60);
        break;
      case 48:
        const calc48 =
          Number(data.initialValue) * (1 + Number(treasure[0])) * (1007 / 252);
        setValue(calc48);
        break;
      case 24:
        const calc24 =
          Number(data.initialValue) * (1 + Number(treasure[0])) * (500 / 252);
        setValue(calc24);
        break;
      case 12:
        const calc12 =
          Number(data.initialValue) * (1 + Number(treasure[0])) * (251 / 252);
        setValue(calc12);
        break;
      default:
        const porcetagem = (Number(treasure[0]) / 12) * months;
        const calc = Number(data.initialValue) * porcetagem;
        const result = months === 10 ? calc - calc * 0.2 : calc - calc * 0.225;
        setValue(result + Number(data.initialValue));
        break;
    }
  };
  return (
    <SimulatorContext.Provider
      value={{
        register,
        handleSubmit,
        onSubmitFunction,
        setMonths,
        value,
        valueinitial,
        months,
        render,
        setRender,
        treasur,
        errors,
        name,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
};
