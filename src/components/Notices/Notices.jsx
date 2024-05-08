import { ContentContainer, Title } from "common/GiobalStyles";
import { NoticesContainer } from "./Notices.styled";
import NoticesList from "components/NoticesList/NoticesList";
import NoticesFilter from "components/NoticesFilter/NoticesFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noticesInf } from "../../redux/petLove/operations";
import { selectNoticesInf } from "../../redux/petLove/selector";

export default function Notices() {
  const dispatch = useDispatch();
  const noticesData = useSelector(selectNoticesInf);  

  useEffect(() => {
    dispatch(noticesInf({ byDate: true, page: 1, limit: 6  }));
  }, [dispatch]);

  return (
    <ContentContainer>
      <NoticesContainer>
        <Title>Find your favorite pet</Title>

        <NoticesFilter />

        <NoticesList noticesData={noticesData} />        
      </NoticesContainer>
    </ContentContainer>
  );
}  