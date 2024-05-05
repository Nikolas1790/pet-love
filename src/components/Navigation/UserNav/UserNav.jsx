import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import { NavConteiner } from "../Navigation.styled";
import PortalModal from "components/PortalModal/PortalModal";
import LogOut from "components/Modals/LogOutModal/LogOutModal";
import { useState } from "react";

export default function UserNav({home}) {
  const [openModal, setOpenModal] = useState(false);
  const handleLogout = () => {
    setOpenModal(true)
  };
  return (
      <NavConteiner>
        {!home && <ButtonOrange label='LOG OUT' onClick={() => handleLogout()} width='136px' />}
        <button>NAME</button>

        <PortalModal active={openModal} setActive={setOpenModal}>
          <LogOut closeModals={() => setOpenModal()} />
        </PortalModal>
      </NavConteiner>
  )
}