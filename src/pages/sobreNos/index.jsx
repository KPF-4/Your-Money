import Lottie from "react-lottie";
import Header from "../../components/Header";
import * as team from "../../assets/json-animate/team-animation.json";
import Carlos from "../../assets/imgs/Carlos.jpeg";
import Lucas from "../../assets/imgs/Lucas.jpg";
import Willian from "../../assets/imgs/Willian.jpg";
import { Container, MainContainer, SupConteiner } from "./styles";

const SobreNos = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: team,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Header />
      <Container>
        <MainContainer>
          <figure>
            <Lottie height={"auto"} options={defaultOptions} />
          </figure>
          <SupConteiner>
            <ul>
              <li>
                <div>
                  <figure>
                    <img src={Willian} alt="Willian" />
                  </figure>
                  <h2>Tech Lead</h2>
                </div>
                <p>
                  Meu nome é Willian Matos Cabral, tenho 21 anos e sou um
                  estudante Full Stack da Kenzie, sou brasileiro e moro em
                  Jaraguá do Sul - SC, amo a tecnologia e sou fissurado por
                  linhas de código, meu papel na Your Money é de Tech Leader, e
                  tem sido um prazer desenvolver deste projeto. Enquanto
                  desenvolvi este projeto aprendi muito com cada integrante,
                  além de passar os conhecimentos que adquiri ao longo do curso,
                  é sempre bom ser humilde e estar de mente aberta para todas as
                  ideias e sugestões que recebemos ao longo da nossa vida, além
                  de estar preparado para um bom desafio, como foi a Your Money.
                  Está sendo um prazer fazer este projeto com pessoas tão
                  afáveis e com tanto conhecimento técnico. E lembre-se desafios
                  são apenas oportunidades para aprender e mostrar o quão bom
                  você é.
                </p>
              </li>
              <li>
                <div>
                  <figure>
                    <img src={Lucas} alt="Lucas" />
                  </figure>
                  <h2>Product Owner</h2>
                </div>
                <p>
                  Meu nome é Lucas eu fui o Product Owner desse projeto, foi um
                  desafio divertido participar da elaboração, figma e de todas
                  as etapas, aprendi muito vendo como outras pessoas escrevem suas linhas de código, além
                  de ser pessoas incríveis que fizeram parte dessa etapa da
                  minha vida.
                </p>
              </li>
              <li>
                <div>
                  <figure>
                    <img src={Carlos} alt="Carlos" />
                  </figure>
                  <h2>Scrum Master</h2>
                </div>
              </li>
            </ul>
          </SupConteiner>
        </MainContainer>
      </Container>
    </>
  );
};
export default SobreNos;
