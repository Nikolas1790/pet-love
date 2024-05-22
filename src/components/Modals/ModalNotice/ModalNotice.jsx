import XButton from "components/XButton/XButton";
import { BtnContainer, NoticeModal, PetImg, ReitingContainer } from "./ModalNotice.styled";
import { PetComments, PetDetails, TitleCard } from "components/NoticesItem/NoticesItem.styled";
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";
import StarRating from "components/StarRaiting/StarRaiting";
import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import ButtonLightOrange from "components/Buttons/ButtonLightOrange/ButtonLightOrange";
import { useDispatch, useSelector, } from "react-redux";
import { noticesFavorite } from "../../../redux/petLove/operations";
// import { selectFavoritePets } from "../../../redux/petLove/selector";
import { useEffect } from "react";
import { currentFull } from "../../../redux/auth/operationsAuth";
import { selectToken, selectUser } from "../../../redux/auth/selectorAuth";

export default function ModalNotice({ closeModals, card, petDetailsData }) {
  const dispatch = useDispatch();
  // console.log(card)
  // console.log(card.comment)
  // let favoritePets = useSelector(selectFavoritePets);
  let user = useSelector(selectUser);
  const token = useSelector(selectToken);

  let favoritesAll = useSelector(selectUser);


  const isFavorite = favoritesAll.noticesFavorites.some(i => i._id === card._id);
  console.log( isFavorite )
  useEffect(() => {
    if (token && !user.name) {
      dispatch(currentFull());
    }
  }, [dispatch, token, user.name]);

  const handleAddToFavorite = (item) => {
    dispatch(noticesFavorite(item));
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
          label='Add to' 
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