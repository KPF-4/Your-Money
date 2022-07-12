import { createContext, useState } from "react";

const newsFeaturedFixed = [
  {
    title: "Recompra de dívida no exterior soma US$ 8 bilhões",
    link: "https://valor.globo.com/financas/noticia/2022/07/07/recompra-de-divida-no-exterior-soma-us-8-bilhoes.ghtml",
  },

  {
    title: "Mercado ainda vê alta para o Ibovespa em 2022",
    link: "https://valor.globo.com/financas/noticia/2022/07/07/mercado-ainda-ve-alta-para-o-ibovespa-em-2022.ghtml",
  },
  {
    title:
      "Análise: Em apenas três semanas, ata do Fed perdeu conexão com a realidade",
    link: "https://valor.globo.com/financas/noticia/2022/07/06/analise-em-apenas-tres-semanas-ata-do-fed-perdeu-conexao-com-a-realidade.ghtml",
  },
  {
    title: "Documento do Fed perdeu conexão com a realidade",
    link: "https://valor.globo.com/financas/noticia/2022/07/07/documento-do-fed-perdeu-conexao-com-a-realidade.ghtml",
  },
  {
    title: "Vectis compra fatia da AAWZ, que atua com agente autônomo",
    link: "https://valor.globo.com/financas/noticia/2022/07/07/vectis-compra-fatia-da-aawz-que-atua-com-agente-autonomo.ghtml",
  },
];

const newsWeeklyFixed = [
  {
    source: {
      id: "info-money",
      name: "InfoMoney",
    },
    author: null,
    title:
      "Ações de Gol (GOLL4) e Azul (AZUL4) fecham em queda de até 11% com alta do dólar e cortes de projeções para o setor - InfoMoney",
    description:
      "Dados da Gol divulgados hoje também mostraram recuperação na receita, mas com margens ainda pressionadas; Morgan e UBS revisaram recentemente o setor",
    url: "https://www.infomoney.com.br/mercados/acoes-de-gol-goll4-e-azul-azul4-derrocada-alta-do-dolar-cortes-projecoes-para-o-setor/",
    urlToImage:
      "https://www.infomoney.com.br/wp-content/uploads/2019/06/janela-de-aviao.jpg?quality=70",
    publishedAt: "2022-07-11T20:11:13Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Correiobraziliense.com.br",
    },
    author: "Correio Braziliense",
    title:
      "Profissão de faxineiro lidera geração de vagas de emprego no país - Correio Braziliense",
    description:
      "De acordo com levantamento da Confederação Nacional do Comércio de Bens, Serviços e Turismo (CNC), Serviços é o setor que mais abriu vagas de empregos nos últimos 12 meses - até maio de 2022",
    url: "https://www.correiobraziliense.com.br/economia/2022/07/5021475-profissao-de-faxineiro-lidera-geracao-de-vagas-de-emprego-no-pais.html",
    urlToImage:
      "https://midias.correiobraziliense.com.br/_midias/jpg/2021/08/12/675x450/1_carteira_de_trabalho2-6802684.jpg?20220429125555?20220429125555",
    publishedAt: "2022-07-11T20:01:00Z",
    content:
      "Serviços é o setor que mais abriu vagas de empregos nos últimos 12 meses até maio de 2022, de acordo com dados da Confederação Nacional do Comércio de Bens, Serviços e Turismo (CNC). As profissões de… [+1118 chars]",
  },
  {
    source: {
      id: null,
      name: "Canaltech.com.br",
    },
    author: "Felipe Ribeiro",
    title: "Os 10 sedãs mais vendidos de junho de 2022 - Canaltech",
    description:
      "Fiat Cronos tem desempenho acima do normal e foi o sedã mais vendido do país no mês. Corolla segue reinando absoluto entre os médios",
    url: "https://canaltech.com.br/carros/os-10-sedas-mais-vendidos-de-junho-de-2022/",
    urlToImage:
      "https://t.ctcdn.com.br/HMwm_Aa46kKVsSR8ATirETbAjv4=/1400x788/smart/i520872.jpeg",
    publishedAt: "2022-07-11T20:00:00Z",
    content:
      "O Fiat Cronos surpreendeu e foi o sedã mais vendido do Brasil no mês de junho. Segundo ranking divulgado pela Federação Nacional da Distribuição de Veículos Automotores (Fenabrave), o carro da marca … [+2219 chars]",
  },
  {
    source: {
      id: "info-money",
      name: "InfoMoney",
    },
    author: null,
    title:
      "Tesouro Direto: taxas avançam com risco fiscal, projeções do IPCA e cenário externo - InfoMoney",
    description:
      "Prefixados oferecem até 13,32% ao ano; ganho real dos papéis de inflação chega a 6,30%.",
    url: "https://www.infomoney.com.br/onde-investir/tesouro-direto-retorno-de-papeis-de-inflacao-chega-a-634-e-atinge-nova-maxima-historica/",
    urlToImage:
      "https://www.infomoney.com.br/wp-content/uploads/2020/04/GettyImages-1206366629-1.jpg?quality=70",
    publishedAt: "2022-07-11T19:10:05Z",
    content: null,
  },
];

export const FeaturedNewsContext = createContext([]);

export const FeaturedNewsProvider = ({ children }) => {
  const [newsFeatured] = useState(newsFeaturedFixed);
  const [news] = useState(newsWeeklyFixed);

  return (
    <FeaturedNewsContext.Provider value={{ newsFeatured, news }}>
      {children}
    </FeaturedNewsContext.Provider>
  );
};
