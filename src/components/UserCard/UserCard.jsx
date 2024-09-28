// import EditUserBtn from "components/Buttons/EditUserBtn/EditUserBtn";
import LogOutBtn from "components/Buttons/LogOutBtn/LogOutBtn";
import UserBlock from "components/UserBlock/UserBlock";
import { UserCardBlock, WrapperLogoutBtn } from "./UserCard.styled";
import AddPetComponent from "components/AddPetComponent/AddPetComponent";
import EditUserBtnRight from "components/EditUserBtnRight/EditUserBtnRight";
import EditUserBtnLeft from "components/EditUserBtnLeft/EditUserBtnLeft";

export default function UserCard() {
  return (
    <UserCardBlock>   
      <EditUserBtnRight />   
      <EditUserBtnLeft />
      {/* <EditUserBtn /> */}
      <UserBlock />
      <AddPetComponent />
      
      <WrapperLogoutBtn>
        <LogOutBtn page='profile' />
      </WrapperLogoutBtn>
    </UserCardBlock>    
  );
}  