import { LogoHeart, LogoLink } from "./Logo.styled";
import sprite from '../../img/sprite.svg';

export default function Logo() {
  return (           
    <LogoLink to='/home'>
      petl
        <LogoHeart>
          <svg width={18} height={16}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </LogoHeart>
      ve
    </LogoLink > 
  );
};