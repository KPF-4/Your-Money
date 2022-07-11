import { StyledDailyNewsCard } from "./styles";

const DailyNewsCard = ({ article }) => {
  return (
    <StyledDailyNewsCard>
      <a href={article.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={article.urlToImage} alt="" />
        </figure>
        <div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      </a>
      <button onClick={()=>console.log(article)}>A</button>
    </StyledDailyNewsCard>
  );
};

export default DailyNewsCard;
