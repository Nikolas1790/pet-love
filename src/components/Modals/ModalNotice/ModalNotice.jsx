import XButton from "components/XButton/XButton";
import { BtnContainer, NoticeModal, PetImg, ReitingContainer } from "./ModalNotice.styled";
import { PetComments, PetDetails, TitleCard } from "components/NoticesItem/NoticesItem.styled";
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";
import StarRating from "components/StarRaiting/StarRaiting";
import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import ButtonLightOrange from "components/Buttons/ButtonLightOrange/ButtonLightOrange";
import { useDispatch } from "react-redux";
import {  noticesFavorite, noticesFavoriteDell } from "../../../redux/petLove/operations";

export default function ModalNotice({ closeModals, card, petDetailsData, isFavorite }) {
  const dispatch = useDispatch();

  // console.log( card )
  const handleAddToFavorite = (item) => {
    if(!isFavorite){
      dispatch(noticesFavorite(item));
    } else{
      dispatch(noticesFavoriteDell(item));
    }
  };

  return (           
    <NoticeModal>      
      <PetImg src={card.imgURL} alt="pet" />
      <TitleCard margin="10px">{card.title}</TitleCard>
      <ReitingContainer>
        <StarRating rating={Math.min(card.popularity, 5)} />
        <p>{card.popularity}</p>
      </ReitingContainer>             
      
      <PetDetails margin="18px">
        {petDetailsData.slice(0, 4).map((detail) => (
          <PetDetailItem key={detail.label} label={detail.label} value={detail.value} />
        ))}
      </PetDetails>
      <PetComments>{card.comment}</PetComments>

      <BtnContainer>
        <ButtonOrange 
          label={isFavorite ?  "Remove" : 'Add to'} 
          width='160px' 
          onClick={() => handleAddToFavorite(card._id)} 
          isFavorite={isFavorite}
        />
        <ButtonLightOrange label='Contact'  width='160px' />
      </BtnContainer>

      <XButton closeModals={closeModals} />
    </NoticeModal>
  );
};