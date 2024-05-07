import { NewsListContainer } from "./NewsList.styled";
import NewsItem from "components/NewsItem/NewsItem";

export default function NewsList({newsData}) {
  return (
    <NewsListContainer>
      {Array.isArray(newsData.results) && newsData.results.map((article) => (
        <NewsItem key={article._id} article={article}/>
      ))}
    </NewsListContainer>
  );
}  