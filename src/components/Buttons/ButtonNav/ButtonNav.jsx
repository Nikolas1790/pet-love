import { NavBtn } from "./ButtonNav.styled";
import sprite from '../../../img/sprite.svg';

export default function ButtonNav({ className, label, onClick, width, to, home }) {
  return (    
    <NavBtn to={to} className={className} onClick={onClick} width={width} label={label} home={home} >
      {label}



      {label === 'Add pet' && (
        <svg width={18} height={18}>
          <use href={`${sprite}#icon-plus`} />
        </svg>
      )}
    </NavBtn>    
  )
}