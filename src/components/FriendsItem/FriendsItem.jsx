import { ImgContainer, ItemContacts, ItemContainer, ItemSpan, ItemTitle, LinkContact } from "./FriendsItem.styled";

export default function FriendsItem({friend}) {
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
    </ItemContainer> 
  );
}  