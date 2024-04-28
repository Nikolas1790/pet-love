import { ImgContainer, ItemContacts, ItemContainer, ItemSpan, ItemTitle, LinkContact, TimeContainer } from "./FriendsItem.styled";

export default function FriendsItem({friend}) {
  function getWorkingHours(workDays) {
    if (!workDays || !Array.isArray(workDays) || workDays.length === 0) {
      return "Day and night";
    };
    const openDay = workDays.find(day => day.isOpen);
    
    return openDay ? `${openDay.from} - ${openDay.to}` : null;
  };

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
        {workingHours}
      </TimeContainer>   
    </ItemContainer> 
  );
}  