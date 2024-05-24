import { BtnsConteiner, Cat, Modal, TitleLodOut } from "./LogOutModal.styled";

import catInCercle from '../../../img/PetInCircle/CatInСircle.png';
import ButtonNav from "components/Buttons/ButtonNav/ButtonNav";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import ButtonGrayUniversal from "components/Buttons/ButtonGrayUniversal/ButtonGrayUniversal";
import XButton from "components/XButton/XButton";

export default function LogOut({ closeModals }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/home');
    } catch (error) {
      toast.error("Log out failed. Something went wrong.");
    }
  };  
  return (           
    <Modal>
      <Cat src={catInCercle} alt="cat log out" />
      <TitleLodOut>Already leaving?</TitleLodOut>
      <BtnsConteiner>
        <ButtonNav to='/login' label='Yes' onClick={handleButtonClick} width='140px' />
        <ButtonGrayUniversal label='Cancel' onClick={closeModals} width='140px' />
      </BtnsConteiner>

      <XButton closeModals={closeModals} />
    </Modal>    
  );
};