import { ImgContainer, ItemContacts, ItemContainer, ItemSpan, ItemTitle } from "./FriendsItem.styled";

export default function FriendsItem({friend}) {
  return (
    <ItemContainer>
      <ImgContainer src={friend.imageUrl} alt="logo" />

      <div>
        <ItemTitle>{friend.title}</ItemTitle>

        <ItemContacts><ItemSpan>Email:</ItemSpan>{friend.email || "website only"}</ItemContacts>
        <ItemContacts><ItemSpan>Address:</ItemSpan> {friend.address || "website only"}</ItemContacts>
        <ItemContacts><ItemSpan>Phone:</ItemSpan> {friend.phone || "email only"}</ItemContacts>        
      </div>      
    </ItemContainer> 
  );
}  