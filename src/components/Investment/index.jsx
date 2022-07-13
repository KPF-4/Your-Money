import { useContext } from "react";
import { SimulatorContext } from "../../providers/simulator";
import Button from "../Button";
import Input from "../Input";
import {
  ButtonStyle,
  Container,
  FormStyle,
  RangeConteiner,
  RangeStyle,
  SelectStyle,
  TitleConteiner,
} from "./styles";

const Investment = () => {
  const month = [1, 2, 4, 6, 8, 10, 12, 24, 48, 60, 360];
  const {
    errors,
    register,
    handleSubmit,
    onSubmitFunction,
    setMonths,
    months,
    valueinitial,
    value,
    render,
    setRender,
    treasur,
    name,
  } = useContext(SimulatorContext);

  const rangerFunction = (e) => {
    setMonths(month[e.target.value]);
  };

  const valor = (data) =>
    data.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <section>
      <TitleConteiner>
        <h3>Simulador de Aplicação</h3>
      </TitleConteiner>
      {render === false ? (
        <FormStyle onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name={"nameAplication"}
            label={"Nome da aplicação"}
            error={errors.nameAplication}
            register={register}
            type="text"
            placeholder="Nome da aplicação"
          />
          <SelectStyle>
            <label htmlFor="teste"> Tipos de investimento</label>
            <select name="teste" {...register("treasureValue")}>
              <option value="DEFAULT" hidden>
                Selecione o investimento
              </option>
              <option value="0.1308-Tesouro Direto">Tesouro Direto</option>
              <option value="0.163-Tesouro Selic">Tesouro Selic</option>
              <option value="0.2039-CDB e LC">CDB e LC</option>
              <option value="0.163-LCI e LCA">LCI e LCA</option>
            </select>

            {errors.treasureValue && (
              <span>{errors.treasureValue.message}</span>
            )}
          </SelectStyle>
          <Input
            id="card"
            type="number"
            name={"initialValue"}
            error={errors.initialValue}
            label={"Valor"}
            register={register}
            placeholder="Valor do investimento"
          />
          <RangeConteiner>
            <span>
              <p htmlFor="">Tempo de investimento.</p>
              <p>{months > 1 ? `${months} meses` : `${months} mês`} </p>
            </span>
            <RangeStyle
              type="range"
              min={0}
              max={10}
              defaultValue="0"
              onChange={(e) => rangerFunction(e)}
            />
          </RangeConteiner>
          <ButtonStyle>
            <Button width="70%" background="var(--green-button)">
              Simular
            </Button>
          </ButtonStyle>
        </FormStyle>
      ) : (
        <Container>
          <h3>{name}</h3>
          <p>Periodo: {months > 1 ? `${months} meses` : `${months} mês`}</p>
          <p>
            Rentabilidade
            {treasur[1] === "LCI e LCA"
              ? `da ${treasur[1]} é 98% do CDI.`
              : treasur[1] === "CDB e LC"
              ? ` do ${treasur[1]} é 127% do CDI`
              : treasur[1] === "Tesouro Selic"
              ? `do ${treasur[1]} é 13,25%`
              : `do ${treasur[1]} é ${treasur[0] * 100}%`}
          </p>
          <p>Valor investido: {valor(valueinitial)}</p>
          <p>Valor líquido: {valor(value - valueinitial)} </p>
          <h3>Valor total: {valor(value)}</h3>

          <Button
            width="47%"
            background="var(--green-button)"
            onClick={() => setRender(false)}
          >
            Voltar
          </Button>
        </Container>
      )}
    </section>
  );
};
export default Investment;
