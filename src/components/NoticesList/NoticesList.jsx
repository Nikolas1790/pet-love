import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noticesInf } from "../../redux/petLove/operations";
import { selectNoticesInf } from "../../redux/petLove/selector";

export default function NoticesList(){
  const dispatch = useDispatch();
  const noticesData = useSelector(selectNoticesInf);  

  useEffect(() => {
    dispatch(noticesInf({ byDate: true, page: 1, limit: 6  }));
  }, [dispatch]);
  console.log(noticesData)

  return (
    <div>
      aoaaaa
    </div>
  )
}