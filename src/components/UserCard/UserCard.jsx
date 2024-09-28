import EditUserBtn from "components/Buttons/EditUserBtn/EditUserBtn";
import LogOutBtn from "components/Buttons/LogOutBtn/LogOutBtn";
import UserBlock from "components/UserBlock/UserBlock";
import { UserCardBlock, WrapperLogoutBtn } from "./UserCard.styled";
import AddPetComponent from "components/AddPetComponent/AddPetComponent";

export default function UserCard() {
  return (
    <UserCardBlock>      
      <EditUserBtn />
      <UserBlock />
      <AddPetComponent />
      
      <WrapperLogoutBtn>
        <LogOutBtn page='profile' />
      </WrapperLogoutBtn>
    </UserCardBlock>    
  );
}  