import { ContentContainer } from "common/GiobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectNewsInf } from "../../redux/petLove/selector";
import { newsInf } from "../../redux/petLove/operations";
import { useEffect } from "react";

export default function News() {
  const dispatch = useDispatch();
  const orders = useSelector(selectNewsInf);  

  useEffect(() => {
    dispatch(newsInf({ page: 1, limit: 6, keyword: ''  }));
  }, [dispatch]);
  console.log(orders)
  return (
    <ContentContainer>
      Newsss
    </ContentContainer>
  );
}  