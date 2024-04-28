import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectNewsInf } from "../../redux/petLove/selector";
import { NewsListContainer } from "./NewsList.styled";
import NewsItem from "components/NewsItem/NewsItem";
import { newsInf } from "../../redux/petLove/operations";

export default function NewsList() {
  const dispatch = useDispatch();
  const newsData = useSelector(selectNewsInf);  

  useEffect(() => {
    dispatch(newsInf({ page: 1, limit: 6, keyword: ''  }));
  }, [dispatch]);
  console.log(newsData?.results)

  return (
    <NewsListContainer>
    {Array.isArray(newsData.results) && newsData.results.map((article) => (
      <NewsItem key={article._id} article={article}/>
    ))}
    </NewsListContainer>
  );
}  