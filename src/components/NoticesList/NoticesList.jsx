import NoticesItem from "components/NoticesItem/NoticesItem"
import { NoticesListContainer } from "./NoticesList.styled"

export default function NoticesList({noticesData}){
  console.log(noticesData.results)
  // const hasResults = Array.isArray(noticesData.results) && noticesData.results.length > 0;
  
  return (
    <NoticesListContainer>
      {Array.isArray(noticesData.results) && noticesData.results.map((card) => (
        <NoticesItem key={card._id} card={card}/>
      ))}
    </NoticesListContainer>
  )
}