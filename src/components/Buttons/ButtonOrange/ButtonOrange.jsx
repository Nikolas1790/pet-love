import { Heart, OrangeBtn } from "./ButtonOrange.styled";
import sprite from '../../../img/sprite.svg';

export default function ButtonOrange({ className, label, onClick, width }) {
  return (    
    <OrangeBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}

      <Heart>
        <use href={`${sprite}#icon-heart-add`} />
      </Heart>
    </OrangeBtn>    
  )
}