import DailyNews from "../../components/DailyNews/idnex";
import FeaturedNews from "../../components/FeaturedNews";
import Header from "../../components/Header";
import { DailyNewsArea, NewsArea, NewsContent } from "./styles";

const News = () => {
  return (
    <>
      <Header />
      <NewsArea>
        <NewsContent>
          <FeaturedNews />
          <DailyNewsArea>
            <DailyNews />
          </DailyNewsArea>
        </NewsContent>
      </NewsArea>
    </>
  );
};

export default News;
