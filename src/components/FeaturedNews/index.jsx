import { useContext } from "react";
import { FeaturedNewsContext } from "../../providers/featuredNews";
import { WeeklyNewsCard } from "../WeeklyNewsCard";
import { FeaturedNewsArea, FeaturedNewsCard, Line } from "./styles";

const FeaturedNews = () => {
  const { newsFeatured, news } = useContext(FeaturedNewsContext);

  return (
    <section>
      <FeaturedNewsArea>
        <Line width="70%">
          <h3>Noticias em Destaque</h3>
        </Line>
        {newsFeatured?.map((featuredNews, index) => (
          <FeaturedNewsCard key={index}>
            <span>{index + 1}. </span>
            <a href={featuredNews.link} target="_blank" rel="noreferrer">
              {featuredNews.title}
            </a>
          </FeaturedNewsCard>
        ))}
      </FeaturedNewsArea>

      <FeaturedNewsArea>
        <Line width="70%">
          <h3>Noticias</h3>
        </Line>
        {news?.map((article, index) => (
          <WeeklyNewsCard key={index} article={article} />
        ))}
      </FeaturedNewsArea>
    </section>
  );
};

export default FeaturedNews;
