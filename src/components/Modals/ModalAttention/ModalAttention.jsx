import XButton from "components/XButton/XButton";
import { AttentionsModal, DogSilhouette, NavContainer, TextAttention, TitleAttention } from "./ModalAttention.styled";
import ButtonNav from "components/Buttons/ButtonNav/ButtonNav";
import dogImg from '../../../img/PetInCircle/DogInСircle.png';

export default function ModalAttentions({ closeModals }) {
  return (           
    <AttentionsModal>
      <DogSilhouette src={dogImg} alt="dog silhouette" />

      <TitleAttention>Attention</TitleAttention>
      <TextAttention>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</TextAttention>

      <NavContainer>
        <ButtonNav to='/login' label='LOG IN' width='140px'  />
        <ButtonNav to='/register' label='REGISTRATION' width='140px' />
      </NavContainer>

      <XButton closeModals={closeModals} />
    </AttentionsModal>
  );
};