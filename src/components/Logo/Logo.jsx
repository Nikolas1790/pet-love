import { LogoHeart, LogoLink } from "./Logo.styled";
import sprite from '../../img/sprite.svg';

export default function Logo({ isHome}) {
  return (           
    <LogoLink to='/home'>
      petl
        <LogoHeart  isHome={isHome}>
          <svg width={18} height={16}>
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </LogoHeart>
      ve
    </LogoLink > 
  );
};