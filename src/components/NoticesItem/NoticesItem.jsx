import { CardContainer, ImgCard, InfMainContainer, NavCard, PetComments, PetDetails, PopularityContainer, PopularityIndicators, TitleCard } from "./NoticesItem.styled";
import sprite from '../../img/sprite.svg';
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";
import ButtonOrange from "components/Buttons/ButtonOrange/ButtonOrange";
import PortalModal from "components/PortalModal/PortalModal";
import { useState } from "react";
import ModalAtentions from "components/Modals/ModalAttention/ModalAttention";

export default function NoticesItem({card}) {  
  const [openModal, setOpenModal] = useState(false);
  // console.log(card)

  // Функція для форматування дати
  const formatDate = (dateString) => {
    const dateParts = dateString.split("-");
    return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
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


  return (
    <CardContainer>
      <ImgCard src={card.imgURL} alt='pet' />
      <InfMainContainer>
        <div>
          <PopularityIndicators>
            <TitleCard>{card.title}</TitleCard>

            <PopularityContainer>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-star`} />
              </svg>
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
          <ButtonOrange label='Learn more'  onClick={() => setOpenModal(true)} />
          <button  onClick={() => setOpenModal(true)}>
            <svg width={48} height={48}>
                <use href={`${sprite}#icon-favorite`} />
              </svg>
          </button>
        </NavCard>
      </InfMainContainer>

      
      <PortalModal active={openModal} setActive={setOpenModal}>
        <ModalAtentions closeModals={() => setOpenModal()} />
      </PortalModal>
    </CardContainer> 
  );
}  