import { useDispatch, useSelector } from "react-redux";
import { FriendsListContainer } from "./FriendsList.styled";
import { useEffect } from "react";
import { friendsInf } from "../../redux/petLove/operations";
import { selectFriendsInf } from "../../redux/petLove/selector";
import FriendsItem from '../FriendsItem/FriendsItem';

export default function FriendsList() {
  const dispatch = useDispatch();
  const friendsData = useSelector(selectFriendsInf);

  useEffect(() => {
    dispatch(friendsInf())
  }, [dispatch])
  // console.log(friendsData)

  return (
    <FriendsListContainer>
      {friendsData.map((friend) => (
        <FriendsItem key={friend._id} friend={friend}/>
      ))}
    </FriendsListContainer>
  );
}  