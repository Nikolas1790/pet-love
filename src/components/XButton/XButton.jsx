import sprite from '../../img/sprite.svg';
import { ClosingSymbol } from './XButton.style';

export default function XButton({closeModals}){
  return(
    <ClosingSymbol onClick={closeModals}>
      <svg width={24} height={24}>
        <use href={`${sprite}#icon-x`} />
      </svg>   
    </ClosingSymbol>
  )
}