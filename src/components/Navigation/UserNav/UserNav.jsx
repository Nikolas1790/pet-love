import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import { NavConteiner } from "../Navigation.styled";
import PortalModal from "components/PortalModal/PortalModal";
import LogOut from "components/Modals/LogOutModal/LogOutModal";
import { useState } from "react";
import sprite from '../../../img/sprite.svg';
import { ProfilName, ProfilNav } from "./UserNav.styled";
import { selectUser } from "../../../redux/auth/selectorAuth";
import { useSelector } from "react-redux";

export default function UserNav({home}) {
  const [openModal, setOpenModal] = useState(false);
  let user = useSelector(selectUser);
  // console.log(user.name )

  const handleLogout = () => {
    setOpenModal(true)
  };
  return (
      <NavConteiner>
        {!home && <ButtonOrange label='LOG OUT' onClick={() => handleLogout()} width='136px' />}
        <ProfilNav to='/profile'>
          <svg width={50} height={50}>
            <use href={`${sprite}#icon-user-without-photo`} />
          </svg>
          <ProfilName>{user.name}</ProfilName>
        </ProfilNav>

        <PortalModal active={openModal} setActive={setOpenModal}>
          <LogOut closeModals={() => setOpenModal()} />
        </PortalModal>
      </NavConteiner>
  )
}