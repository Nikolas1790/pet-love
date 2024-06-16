import { Heart, OrangeBtn } from "./ButtonOrange.styled";
import sprite from '../../../img/sprite.svg';

export default function ButtonOrange({ className, label, onClick, width, isFavorite, page }) {
  console.log(page)
  return (    
    <OrangeBtn className={className} onClick={onClick} type="submit" width={width} page={page} >
      {label}

      {(label === 'Add to' || label === 'Remove') && (
        <Heart isFavorite={isFavorite}>
          <use href={`${sprite}#icon-heart-add`} />
        </Heart>
      )}
    </OrangeBtn>    
  )
}