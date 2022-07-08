import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DailyNewsContext = createContext([]);

const baseArticles = [
  {
    source: {
      id: "globo",
      name: "Globo",
    },
    author: null,
    title:
      "IPCA: passagem aérea, pepino, diesel, leite, transporte por app: veja os 50 itens que mais subiram em 1 ano - Globo",
    description:
      "Inflação acelerou para 0,67% em junho e atingiu 11,89% no cumulado em 12 meses.",
    url: "https://g1.globo.com/economia/noticia/2022/07/08/ipca-passagem-aerea-pepino-diesel-leite-transporte-por-app-veja-os-50-itens-que-mais-subiram-em-1-ano.ghtml",
    urlToImage:
      "https://s2.glbimg.com/ySCzvBuOLgqU84m6LKhULyRnS7A=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/f/t/6BH24HSICvHceRAiMfRA/pexels-daniel-dan-7543157-1-.jpg",
    publishedAt: "2022-07-08T13:00:33Z",
    content:
      "A disparada dos preços segue disseminada no país, com mais de um terço (67%) dos cerca de 360 produtos e serviços pesquisados pelo IBGE registrando alta em junho. \r\nEm 12 meses até junho, a passagem … [+651 chars]",
  },
  {
    source: {
      id: "info-money",
      name: "InfoMoney",
    },
    author: null,
    title:
      "EUA criam 372 mil empregos em junho, mostra payroll, acima do esperado - InfoMoney",
    description:
      "Pesquisa Reuters com economistas projetava a abertura de 268 mil vagas de trabalho fora do setor agrícola no mês passado.",
    url: "https://www.infomoney.com.br/mercados/eua-payroll-emprego-taxa-desemprego-junho-2022/",
    urlToImage:
      "https://www.infomoney.com.br/wp-content/uploads/2020/10/GettyImages-938764904.jpg?quality=70",
    publishedAt: "2022-07-08T12:31:54Z",
    content:
      "© 2000-2022 InfoMoney. Todos os direitos reservados.\r\nO InfoMoney preza a qualidade da informação e atesta a apuração de todo o conteúdo produzido por sua equipe, ressaltando, no entanto, que não faz… [+1194 chars]",
  },
  {
    source: {
      id: null,
      name: "Seucreditodigital.com.br",
    },
    author: "Priscilla Kinast",
    title:
      "Tome cuidado ou golpistas podem sacar R$ 1.000 do seu FGTS - Seu Crédito Digital",
    description:
      "A criação da conta no app, para sacar o FGTS, é feita forma automática, mesmo que o trabalhador não peça a liberação da mesma.",
    url: "https://seucreditodigital.com.br/tome-cuidado-ou-golpistas-podem-sacar-r-1000-do-seu-fgts/",
    urlToImage:
      "https://seucreditodigital.com.br/wp-content/uploads/2022/07/shutterstock_1822705943.jpg",
    publishedAt: "2022-07-08T12:30:55Z",
    content:
      "Tempo estimado de leitura: 3 minutos\r\nNada escapa dos golpistas. É dito isso, pois o saque de R$ 1.000 do FGTS está na mira dos criminosos. Em suma, eles se aproveitam de falhas de segurança no aplic… [+2508 chars]",
  },
  {
    source: {
      id: "info-money",
      name: "InfoMoney",
    },
    author: null,
    title:
      "Ibovespa futuro recua em dia de “payroll” nos EUA; juros recuam após IPCA de junho - InfoMoney",
    description:
      "Votação da PEC dos Auxílios ficou para semana que vem, mas riscos fiscais continuam no radar dos investidores",
    url: "https://www.infomoney.com.br/mercados/ibovespa-futuro-recua-em-dia-de-payroll-nos-eua-juros-recuam-apos-ipca-de-junho/",
    urlToImage:
      "https://www.infomoney.com.br/wp-content/uploads/2021/11/DSC_2985.jpg?quality=70",
    publishedAt: "2022-07-08T12:19:24Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "Em.com.br",
    },
    author: "Vinícius Prates*",
    title:
      "Ministro divulga vídeo de motorista derramando gasolina: 'Alegria do povo' - Estado de Minas",
    description:
      "Apoiador do presidente Bolsonaro gravou um vídeo entornando gasolina e ministro das Minas e Energia, Adolfo Sachsida, postou em suas redes sociais",
    url: "https://www.em.com.br/app/noticia/politica/2022/07/08/interna_politica,1378814/ministro-divulga-video-de-motorista-derramando-gasolina-alegria-do-povo.shtml",
    urlToImage:
      "https://i.em.com.br/FTsNZ1KfH0-7l3ZdUcXWX1K5gA0=/600x315/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/07/08/1378814/motorista-derramando-gasolina_1_37574.jpg",
    publishedAt: "2022-07-08T12:01:00Z",
    content:
      "Aproveite o melhor do Estado de Minas: contedos exclusivos, colunistas renomados e muitos benefcios para voc.\r\nASSINE AGORAUtilizamos tecnologia e segurana do Google para fazer a assinatura.",
  },
  {
    source: {
      id: null,
      name: "Seucreditodigital.com.br",
    },
    author: "Rafaela Medolago",
    title:
      "Quem pode solicitar o novo cartão prateado do Nubank? - Seu Crédito Digital",
    description:
      "O Nubank lançou um novo cartão, com design prateado, destinado aos clientes com conta Pessoa Jurídica.",
    url: "https://seucreditodigital.com.br/quem-pode-solicitar-novo-cartao-prateado-do-nubank/",
    urlToImage:
      "https://seucreditodigital.com.br/wp-content/uploads/2022/07/nubank-cartao-pj-prateado.jpg",
    publishedAt: "2022-07-08T12:00:00Z",
    content:
      "Tempo estimado de leitura: 3 minutos\r\nRecentemente, o Nubank lançou um novo modelo de cartão de crédito prateado. Além das diferenças no design, o novo cartão promete descomplicar a vida dos propriet… [+2734 chars]",
  },
  {
    source: {
      id: "globo",
      name: "Globo",
    },
    author: null,
    title:
      "Ganhador de R$ 51,8 milhões na Mega-Sena em SC retira prêmio - Globo",
    description:
      "Caixa informa que vencedor teve processo de pagamento iniciado. Aposta simples foi feita em Blumenau.",
    url: "https://g1.globo.com/sc/santa-catarina/noticia/2022/07/08/ganhador-de-r-518-milhoes-na-mega-sena-em-sc-retira-premio.ghtml",
    urlToImage:
      "https://s2.glbimg.com/Dii7c5r8RNpOip0u3RfwwhoAz30=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/l/E/fSL4IXRHi8KcStZy2KQA/loterica-salto-do-norte.jpg",
    publishedAt: "2022-07-08T11:27:41Z",
    content:
      "O ganhador do sorteio mais recente da Mega-Sena já iniciou o processo para a retirada do prêmio, segundo a Caixa Econômica Federal. O vencedor vai receber R$ 51.830.706,79. Ele fez uma aposta simples… [+3823 chars]",
  },
  {
    source: {
      id: null,
      name: "Investing.com",
    },
    author: "Investing.com",
    title:
      "Fique por dentro das 5 principais notícias do mercado desta sexta-feira Por Investing.com - Investing.com Brasil",
    description:
      "Fique por dentro das 5 principais notícias do mercado desta sexta-feira",
    url: "https://br.investing.com/news/economy/fique-por-dentro-das-5-principais-noticias-do-mercado-desta-sextafeira-1016207",
    urlToImage:
      "https://i-invdn-com.investing.com/news/RetailBrazil_800x533_L_1615896891.jpg",
    publishedAt: "2022-07-08T11:14:00Z",
    content:
      "Por Geoffrey Smith e Jessica Bahia Melo\r\nInvesting.com - Os EUA divulgam seu relatório oficial do mercado de trabalho de junho, horas depois de dois importantes funcionários do Federal Reserve batere… [+6733 chars]",
  },
  {
    source: {
      id: null,
      name: "Moneytimes.com.br",
    },
    author: null,
    title:
      "Itaú (ITUB4) compra participação na Avenue e fecha acordo para adquirir controle - Money Times",
    description:
      "O Itaú Unibanco (ITUB4) anunciou nesta sexta-feira (8) um acordo para a aquisição do controle da corretora norte-americana Avenue.",
    url: "https://www.moneytimes.com.br/itau-itub4-compra-participacao-na-avenue-e-fecha-acordo-para-adquirir-controle/",
    urlToImage:
      "https://media.moneytimes.com.br/uploads/2022/05/avenue-banking-cartao-dolar.png",
    publishedAt: "2022-07-08T10:47:00Z",
    content:
      "Após cinco anos da data de fechamento da primeira etapa, diz a empresa, o banco poderá exercer uma opção de compra. (Imagem: Avenue/Divulgação)\r\nO Itaú Unibanco (ITUB4) anunciou nesta sexta-feira (8)… [+2376 chars]",
  },
  {
    source: {
      id: "info-money",
      name: "InfoMoney",
    },
    author: null,
    title:
      "PetroRecôncavo (RECV3) e 3R Petroleum (RRRP3) avaliam compartilhar recursos, Itaú (ITUB4) adquire fatia da Avenue e mais - InfoMoney",
    description:
      "Confira os destaques do noticiário corporativo na sessão desta sexta-feira (8)",
    url: "https://www.infomoney.com.br/mercados/petroreconcavo-recv3-e-3r-petroleum-rrrp3-avaliam-compartilhar-recursos-itau-itub4-faz-aquisicao-mais-radar/",
    urlToImage:
      "https://www.infomoney.com.br/wp-content/uploads/2020/04/GettyImages-820308908-low.jpg?quality=70",
    publishedAt: "2022-07-08T10:36:47Z",
    content: null,
  },
];

export const DailyNewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
     localStorage.getItem("@NEWS") && setArticles(JSON.parse(localStorage.getItem("@NEWS")))
  }, [])

  if (!localStorage.getItem("@NEWS")) {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&category=business&pageSize=10&apiKey=3e5fcc3e7b2542df9502601a00b3cae2"
      )
      .then((response) => {
        localStorage.setItem("@NEWS", JSON.stringify(response.data.articles));
        setArticles(response.data.articles);
      })
    .catch(() => {
      localStorage.setItem("@NEWS", JSON.stringify(baseArticles));
    });
  }

  return (
    <DailyNewsContext.Provider value={{ articles }}>
      {children}
    </DailyNewsContext.Provider>
  );
};
