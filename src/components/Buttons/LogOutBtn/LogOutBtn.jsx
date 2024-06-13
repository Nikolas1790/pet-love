import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import LogOut from "components/Modals/LogOutModal/LogOutModal";
import PortalModal from "components/PortalModal/PortalModal";
import { useState } from "react";

export default function LogOutBtn() {
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    setOpenModal(true)
  };
  return (
    <div>
      <ButtonOrange label='LOG OUT' onClick={() => handleLogout()} width='136px' />


      <PortalModal active={openModal} setActive={setOpenModal}>
          <LogOut closeModals={() => setOpenModal()} />
        </PortalModal>
    </div>    
  );
}  