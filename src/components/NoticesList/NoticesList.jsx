import NoticesItem from "components/NoticesItem/NoticesItem"
import { NoticesListContainer } from "./NoticesList.styled"

export default function NoticesList({noticesData}){
  // console.log(noticesData)

  return (
    <NoticesListContainer>
      {Array.isArray(noticesData.results) && noticesData.results.map((card) => (
        <NoticesItem key={card._id} card={card}/>
      ))}
    </NoticesListContainer>
  )
}