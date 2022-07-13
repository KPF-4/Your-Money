import { StyledWeeklyNewsCard } from "./styles";

export const WeeklyNewsCard = ({ article }) => {
  return (
    <StyledWeeklyNewsCard>
      <a href={article.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={article.urlToImage} alt="" />
        </figure>
        <div>
          <h3>{article.title}</h3>
        </div>
      </a>
    </StyledWeeklyNewsCard>
  );
};
