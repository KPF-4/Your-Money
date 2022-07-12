import DailyNews from "../DailyNews/idnex";
import FeaturedNews from "../FeaturedNews";
import { StyledNewsArea } from "./styles";

const NewsArea = () => {
  return (
    <StyledNewsArea className="news">
      <div className="noticiasDiarias">
        <DailyNews />
      </div>
      <div className="noticiasDestaque">
        <FeaturedNews />
      </div>
    </StyledNewsArea>
  );
};

export default NewsArea;
