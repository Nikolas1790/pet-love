import { ContentContainer, Title } from "common/GiobalStyles";
import { NoticesContainer } from "./Notices.styled";
import NoticesList from "components/NoticesList/NoticesList";
import NoticesFilter from "components/NoticesFilter/NoticesFilter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noticesInf } from "../../redux/petLove/operations";
import { selectNoticesInf } from "../../redux/petLove/selector";
import { Pagination } from "components/Pagination/Pagination";

export default function Notices() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const noticesData = useSelector(selectNoticesInf);  

  useEffect(() => {
    dispatch(noticesInf({ byDate: true, page: currentPage, limit: 6  }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log(noticesData)
  return (
    <ContentContainer>
      <NoticesContainer>
        <Title>Find your favorite pet</Title>

        <NoticesFilter />

        <div>
          <NoticesList noticesData={noticesData} />    
          <Pagination
            currentPage={noticesData.page}
            totalPages={noticesData.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </NoticesContainer>
    </ContentContainer>
  );
}  