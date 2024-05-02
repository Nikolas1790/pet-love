import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ContentBlock, ContentContainer, Title } from "common/GiobalStyles";
import NewsList from "components/NewsList/NewsList";
import { newsInf } from "../../redux/petLove/operations";
import { selectNewsInf } from "../../redux/petLove/selector";
import { Pagination } from "components/Pagination/Pagination";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const newsData = useSelector(selectNewsInf);  

  useEffect(() => {
    dispatch(newsInf({ page: currentPage, limit: 6, keyword: ''  }));
  }, [dispatch, currentPage]);
  // console.log(newsData)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ContentContainer>
      <ContentBlock>
        <Title>News</Title>
        <NewsList newsData={newsData}/>
        <Pagination
            currentPage={newsData.page}
            totalPages={newsData.totalPages}
            onPageChange={handlePageChange}
          />
      </ContentBlock>
    </ContentContainer>
  );
}  