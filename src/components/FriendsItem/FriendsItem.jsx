

export default function FriendsItem({friend}) {
  return (
    <li >
      <img src={friend.imageUrl} alt="logo" />
      {friend.title}
    </li> 
  );
}  