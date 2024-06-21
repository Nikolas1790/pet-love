import EditUserBtn from "components/Buttons/EditUserBtn/EditUserBtn";
import LogOutBtn from "components/Buttons/LogOutBtn/LogOutBtn";
import PetsBlock from "components/PetsBlock/PetsBlock";
import UserBlock from "components/UserBlock/UserBlock";
import { UserCardBlock } from "./UserCard.styled";

export default function UserCard() {
  return (
    <UserCardBlock>      
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn page='profile' />
    </UserCardBlock>    
  );
}  