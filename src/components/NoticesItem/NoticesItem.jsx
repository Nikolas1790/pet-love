import { CardContainer, FavoritBtn, ImgCard, InfMainContainer, NavCard, PetComments, PetDetails, PopularityContainer, PopularityIndicators, TitleCard } from "./NoticesItem.styled";
import sprite from '../../img/sprite.svg';
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";
import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import PortalModal from "components/PortalModal/PortalModal";
import { useEffect, useState } from "react";
import ModalAttentions from "components/Modals/ModalAttention/ModalAttention";
import ModalNotice from "components/Modals/ModalNotice/ModalNotice";
import { selectToken, selectUser } from "../../redux/auth/selectorAuth";
import { useDispatch, useSelector } from "react-redux";
import { Star } from "components/StarRaiting/StarRaiting.styled";
import { noticesFavorite, noticesFavoriteDell } from "../../redux/petLove/operations";
import { selectFavoritePets } from "../../redux/petLove/selector";
import { currentFull } from "../../redux/auth/operationsAuth";

export default function NoticesItem({card}) {  
  const [openModal, setOpenModal] = useState(false);
  const [openModalNotice, setOpenModalNotice] = useState(false);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  let user = useSelector(selectUser);
  // let favoritesAll = useSelector(selectUser);
  let favoritesList = useSelector(selectFavoritePets);
  console.log(user )
  // console.log( favoritesAll )

  const isFavorite = favoritesList.includes(card._id) || user?.noticesFavorites?.some(i => i._id === card._id);

  useEffect(() => {
    if (token && !user.name ) {
      dispatch(currentFull());
    }
  }, [dispatch, token, user.name, isFavorite]);

  // Функція для форматування дати
  const formatDate = (dateString) => {
    if(card.birthday) {
      const dateParts = dateString.split("-");
      return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
    } else{
      return 'unknown';
    }
  };

  const getFirstName = (fullName) => {
    return fullName.split(" ")[0]; // Разделяем строку по пробелу и берем первое слово
  };

  // Створюємо масив об'єктів з label та value
  const petDetailsData = [
    { label: "Name", value: getFirstName(card.name) },
    { label: "Birthday", value: formatDate(card.birthday) },
    { label: "Sex", value: card.sex },
    { label: "Species", value: card.species },
    { label: "Category", value: card.category }
  ];

  const handleButtonClick = () => {
    if (token) {
      setOpenModalNotice(true);
    } else {
      setOpenModal(true); // Если токена нет, открываем вторую модалку
    }
  };

  const handleButtonFavorite = (i) => {
    if (token) {
      if(!isFavorite){
        dispatch(noticesFavorite(i));
      } else{
        dispatch(noticesFavoriteDell(i));
      }
    } else {
      setOpenModal(true); // Если токена нет, открываем вторую модалку
    }
  };
  
  return (
    <CardContainer>
      <ImgCard src={card.imgURL} alt='pet' />
      <InfMainContainer>
        <div>
          <PopularityIndicators>
            <TitleCard>{card.title}</TitleCard>

            <PopularityContainer>
              <Star filled="true">
                <use href={`${sprite}#icon-star`} />
              </Star>
              <p>{card.popularity}</p>
            </PopularityContainer>        
          </PopularityIndicators>
          <PetDetails>
            {petDetailsData.map((detail) => (
              <PetDetailItem key={detail.label} label={detail.label} value={detail.value} />
            ))}
          </PetDetails>
          <PetComments>{card.comment}</PetComments>
        </div>

        <NavCard>
          <ButtonOrange label='Learn more'  onClick={handleButtonClick} />
          <FavoritBtn  onClick={() => handleButtonFavorite(card._id)} isFavorite={isFavorite}  >
            <svg >
              <use href={`${sprite}#icon-heart-add`} />
            </svg>
          </FavoritBtn>
        </NavCard>
      </InfMainContainer>
      
      <PortalModal active={openModalNotice} setActive={setOpenModalNotice}>
        <ModalNotice closeModals={() => setOpenModalNotice()} card={card} petDetailsData={petDetailsData} isFavorite={isFavorite} />
      </PortalModal>
      <PortalModal active={openModal} setActive={setOpenModal}>
        <ModalAttentions closeModals={() => setOpenModal()} />
      </PortalModal>
    </CardContainer> 
  );
}  