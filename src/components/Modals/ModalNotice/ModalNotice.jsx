import XButton from "components/XButton/XButton";
import { NoticeModal, PetImg, ReitingContainer } from "./ModalNotice.styled";
import { PetComments, PetDetails, TitleCard } from "components/NoticesItem/NoticesItem.styled";
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";
import StarRating from "components/StarRaiting/StarRaiting";

export default function ModalNotice({ closeModals, card, petDetailsData }) {
  console.log(card)
  // console.log(petDetailsData)

  return (           
    <NoticeModal>      
      <PetImg src={card.imgURL} alt="pet" />

        <TitleCard margin="10px">{card.title}</TitleCard>

        <ReitingContainer>
          <StarRating rating={Math.min(card.popularity, 5)} />
          <p>{card.popularity}</p>
        </ReitingContainer>
     
      

      
      
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