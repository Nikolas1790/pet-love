import { useState } from 'react';
import sprite from '../../../img/sprite.svg';
import { EditUserBtnContainer, EditUserButton } from './EditUserBtn.styled';
import PortalModal from 'components/PortalModal/PortalModal';
import ModalEditUser from 'components/Modals/ModalEditUser/ModalEditUser';

export default function EditUserBtn() {
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    setOpenModal(true)
  };

  return (
    <EditUserBtnContainer>
      <EditUserButton onClick={() => handleLogout()}>
        <svg width={38} height={38}>
          <use href={`${sprite}#icon-edit`} />
        </svg>
      </EditUserButton>  

      <PortalModal active={openModal} setActive={setOpenModal}>
        <ModalEditUser closeModals={() => setOpenModal()} />
      </PortalModal>
    </EditUserBtnContainer>    
  );
}  