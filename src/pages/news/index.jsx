import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewsArea from "../../components/NewsArea";
import { NewsAreaMain, NewsContent } from "./styles";

const News = () => {
  return (
    <>
      <Header />
      <NewsAreaMain>
        <NewsContent>
          <NewsArea />
        </NewsContent>
      </NewsAreaMain>
      <Footer />
    </>
  );
};

export default News;
