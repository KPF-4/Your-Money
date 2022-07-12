import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsArea from "../../components/NewsArea";
import { NewsAreaMain, NewsContent } from "./styles";

const News = () => {
  return (
    <>
      <NewsAreaMain>
        <Header />
        <NewsContent>
          <NewsArea />
        </NewsContent>
        <Footer />
      </NewsAreaMain>
    </>
  );
};

export default News;
