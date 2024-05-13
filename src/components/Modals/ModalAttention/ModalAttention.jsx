import XButton from "components/XButton/XButton";
import { AtentionsModal } from "./ModalAttention.styled";
import sprite from '../../../img/sprite.svg';

export default function ModalAtentions({ closeModals }) {
  return (           
    <AtentionsModal>
      <svg width={80} height={80}>
        <use href={`${sprite}#icon-x`} />
      </svg>  

      <h2>Attention</h2>
      <p>We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.</p>

<div>
  
</div>

     <XButton closeModals={closeModals} />
    </AtentionsModal>
  );
};