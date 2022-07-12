import { useContext } from "react";
import { NewsArea } from "../../pages/news/styles";
import { FeaturedNewsContext } from "../../providers/featuredNews";
import { FeaturedNewsArea, FeaturedNewsCard, Line } from "./styles";

const FeaturedNews = () => {
  const {newsFeatured} = useContext(FeaturedNewsContext)

  return (
    <section>
      <Line width="70%">
        <h3>Noticias em Destaque</h3>
      </Line>
      <FeaturedNewsArea>
        {newsFeatured?.map((featuredNews, index) => (
          <FeaturedNewsCard key={index}>
            <span>{index + 1}. </span>
            <a href={featuredNews.link} target="_blank" rel="noreferrer">
              {featuredNews.title}
            </a>
          </FeaturedNewsCard>
        ))}
      </FeaturedNewsArea>

      <Line width="70%">
        <h3>Noticias</h3>
      </Line>
      <NewsArea>

      </NewsArea>

    </section>
  );
};

export default FeaturedNews;
