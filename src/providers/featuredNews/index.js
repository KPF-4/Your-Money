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

export const FeaturedNewsContext = createContext([]);

export const FeaturedNewsProvider = ({ children }) => {
  const [newsFeatured, setNewsFeatured] = useState(newsFeaturedFixed);
  const [news, setNews] = useState([])

  return (
    <FeaturedNewsContext.Provider value={{ newsFeatured }}>
      {children}
    </FeaturedNewsContext.Provider>
  );
};
