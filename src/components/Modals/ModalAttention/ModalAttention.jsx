import XButton from "components/XButton/XButton";
import { AtentionsModal, NavContainer, TextAttention, TitleAttention } from "./ModalAttention.styled";
import sprite from '../../../img/sprite.svg';
import ButtonNav from "components/Buttons/ButtonNav/ButtonNav";

export default function ModalAtentions({ closeModals }) {
  return (           
    <AtentionsModal>
      <svg width={80} height={80}>
        <use href={`${sprite}#icon-x`} />
      </svg>  

      <TitleAttention>Attention</TitleAttention>
      <TextAttention>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</TextAttention>

      <NavContainer>
        <ButtonNav to='/login' label='LOG IN' width='140px'  />
        <ButtonNav to='/register' label='REGISTRATION' width='140px' />
      </NavContainer>

      <XButton closeModals={closeModals} />
    </AtentionsModal>
  );
};