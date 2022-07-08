import { useContext } from "react";
import { DailyNewsContext } from "../../providers/dailyNews";
import DailyNewsCard from "../DailyNewsCard";
import { StyledDailyNewsList } from "./styles";

const DailyNews = () => {
  const { articles } = useContext(DailyNewsContext);

  return (
    <section>
      <p></p>
      <StyledDailyNewsList>
        {articles.map((article, index) => (
          <DailyNewsCard key={index} article={article} />
        ))}
      </StyledDailyNewsList>
    </section>
  );
};

export default DailyNews;
