import { useContext } from "react";
import { DailyNewsContext } from "../../providers/dailyNews";
import DailyNewsCard from "../DailyNewsCard";
import { Line, StyledDailyNewsList } from "./styles";

const DailyNews = () => {
  const { articles } = useContext(DailyNewsContext);

  return (
    <section>
      <Line width="40%">
        <h2>Noticias diárias</h2>
      </Line>

      <a href={articles[6].url} target="_blank" rel="noreferrer">
        <figure>
          <img src={articles[6].urlToImage} alt="" />
        </figure>
        <div>
          <h3>{articles[6].title}</h3>
          <p>{articles[6].description}</p>
        </div>
      </a>

      <StyledDailyNewsList>
        {articles.map((article, index) => (
          <DailyNewsCard key={index} article={article} />
        ))}
      </StyledDailyNewsList>
    </section>
  );
};

export default DailyNews;
