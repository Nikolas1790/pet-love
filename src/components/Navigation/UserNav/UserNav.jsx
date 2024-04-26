import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import { NavConteiner } from "../Navigation.styled";
import PortalModal from "components/PortalModal/PortalModal";
import LogOut from "components/Modals/LogOutModal/LogOutModal";
import { useState } from "react";

export default function UserNav() {
  const [openModal, setOpenModal] = useState(false);
  const handleLogout = () => {
    // menu === "mob" && closeModal();    
    setOpenModal(true)
  };
  return (
      <NavConteiner>
        <ButtonOrange label='LOG OUT' onClick={() => handleLogout()} width='136px' />
        <button>NAME</button>

        <PortalModal active={openModal} setActive={setOpenModal}>
          <LogOut closeModals={() => setOpenModal()} />
        </PortalModal>
      </NavConteiner>
  )
}