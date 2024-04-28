import { ImgContainer, ItemContacts, ItemContainer, ItemSpan, ItemTitle, LinkContact, TimeContainer } from "./FriendsItem.styled";

export default function FriendsItem({friend}) {
  console.log(friend?.workDays)

  function getWorkingHours(workDays) {
    if (!workDays || !Array.isArray(workDays)) {
      return "Day and night"; // або інше значення за замовчуванням, яке ви вважаєте за потрібне
    }
    if (!workDays || !Array.isArray(workDays) || workDays.length === 0) {
      return "Day and night";
    }

     // Шукаємо перший об'єкт, де isOpen true
  const openDay = workDays.find(day => day.isOpen);
    
    return openDay ? `${openDay.from} - ${openDay.to}` : null;
  }
  const workingHours = getWorkingHours(friend.workDays);
  
  return (
    <ItemContainer>
      <ImgContainer src={friend.imageUrl} alt="logo" />

      <div>
        <ItemTitle>{friend.title}</ItemTitle>

        <ItemContacts>
          <ItemSpan>Email:</ItemSpan>
          {friend.email ? <LinkContact href={`mailto:${friend.email}`}>{friend.email}</LinkContact> : "website only"}
        </ItemContacts>
        <ItemContacts>
          <ItemSpan>Address:</ItemSpan> 
          {friend.address ? <LinkContact href={friend.addressUrl} target="_blank" rel="noopener noreferrer">{friend.address}</LinkContact> : "website only"}
        </ItemContacts>
        <ItemContacts>
          <ItemSpan>Phone:</ItemSpan>
          {friend.phone ? <LinkContact href={`tel:${friend.phone}`}>{friend.phone}</LinkContact> : "email only"}
        </ItemContacts>        
      </div>   

      <TimeContainer>
        {/* <p>{friend?.workDays?.isOpen ? friend.workDays.from  : "Day and night" }</p> */}
        {workingHours}
      </TimeContainer>   
    </ItemContainer> 
  );
}  