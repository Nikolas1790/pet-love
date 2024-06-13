import { NavConteiner } from "../Navigation.styled";
import sprite from '../../../img/sprite.svg';
import { ProfilName, ProfilNav } from "./UserNav.styled";
import { selectUser } from "../../../redux/auth/selectorAuth";
import { useSelector } from "react-redux";
import LogOutBtn from "components/Buttons/LogOutBtn/LogOutBtn";

export default function UserNav({home}) {
  let user = useSelector(selectUser);

  return (
      <NavConteiner>
        {!home && <LogOutBtn />}
        <ProfilNav to='/profile'>
          <svg width={50} height={50}>
            <use href={`${sprite}#icon-user-without-photo`} />
          </svg>
          <ProfilName>{user.name}</ProfilName>
        </ProfilNav>

      </NavConteiner>
  )
}