import XButton from "components/XButton/XButton";
import { NoticeModal, PetImg } from "./ModalNotice.styled";

export default function ModalNotice({ closeModals, card }) {
  console.log(card)

  return (           
    <NoticeModal>
      <PetImg src={card.imgURL} alt="pet" />

      

      ggggggggggggggggggggggggggggggggggggggggg

      <XButton closeModals={closeModals} />
    </NoticeModal>
  );
};