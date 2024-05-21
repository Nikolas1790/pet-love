import { Heart, OrangeBtn } from "./ButtonOrange.styled";
import sprite from '../../../img/sprite.svg';

export default function ButtonOrange({ className, label, onClick, width, isFavorite }) {
  return (    
    <OrangeBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}

      {label === 'Add to' && (
        <Heart isFavorite={isFavorite}>
          <use href={`${sprite}#icon-heart-add`} />
        </Heart>
      )}
    </OrangeBtn>    
  )
}