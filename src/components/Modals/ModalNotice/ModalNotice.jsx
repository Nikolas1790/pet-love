import XButton from "components/XButton/XButton";
import { NoticeModal, PetImg } from "./ModalNotice.styled";
import { PetComments, PetDetails, TitleCard } from "components/NoticesItem/NoticesItem.styled";
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";

export default function ModalNotice({ closeModals, card, petDetailsData }) {
  // console.log(card)
  console.log(petDetailsData)

  return (           
    <NoticeModal>
      <PetImg src={card.imgURL} alt="pet" />

      
      <TitleCard>{card.title}</TitleCard>
        <PetDetails>
          {petDetailsData.slice(0, 4).map((detail) => (
            <PetDetailItem key={detail.label} label={detail.label} value={detail.value} />
          ))}
        </PetDetails>
        <PetComments>{card.comment}</PetComments>

      <XButton closeModals={closeModals} />
    </NoticeModal>
  );
};