import { Cat, ClosingSymbol, Modal, TitleLodOut } from "./LogOutModal.styled";
import sprite from '../../../img/sprite.svg';

import catInCercle from '../../../img/PetInCircle/CatInСircle.png';

export default function LogOut({ closeModals }) {
  return (           
    <Modal>
      <Cat src={catInCercle} alt="cat log out" />
      <TitleLodOut>Already leaving?</TitleLodOut>
      <div>
gggg
      </div>

      <ClosingSymbol onClick={closeModals}>
        <svg width={24} height={24}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>
    </Modal>    
  );
};