import { CardContainer, ImgCard } from "./NoticesItem.styled";

export default function NoticesItem({card}) {  
console.log(card)

  return (
    <CardContainer>
      <ImgCard src={card.imgURL} alt='pet' />

      <div>
        
      </div>
    </CardContainer> 
  );
}  