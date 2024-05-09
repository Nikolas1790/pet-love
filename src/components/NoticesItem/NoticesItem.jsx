import { CardContainer, ImgCard, PetDetails, PopularityContainer, PopularityIndicators, TitleCard } from "./NoticesItem.styled";
import sprite from '../../img/sprite.svg';
import PetDetailItem from "components/NoticesPetDetailItem/NoticesPetDetailItem";

export default function NoticesItem({card}) {  
  console.log(card)


  // Створюємо масив об'єктів з label та value
  const petDetailsData = [
    { label: "Name", value: card.name },
    { label: "Birthday", value: card.birthday },
    { label: "Sex", value: card.sex },
    { label: "Species", value: card.species },
    { label: "Category", value: card.category }
  ];
  return (
    <CardContainer>
      <ImgCard src={card.imgURL} alt='pet' />
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
        dffdf
      </div>
    </CardContainer> 
  );
}  