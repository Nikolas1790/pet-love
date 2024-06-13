import EditUserBtn from "components/Buttons/EditUserBtn/EditUserBtn";
import LogOutBtn from "components/Buttons/LogOutBtn/LogOutBtn";
import PetsBlock from "components/PetsBlock/PetsBlock";
import UserBlock from "components/UserBlock/UserBlock";

export default function UserCard() {

  return (
    <div>
      <EditUserBtn />
      <UserBlock />
      <PetsBlock />
      <LogOutBtn />
    </div>    
  );
}  