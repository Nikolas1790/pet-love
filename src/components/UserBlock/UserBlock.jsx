import sprite from '../../img/sprite.svg';
import { PhotoContainer, UploadPhoto, UserBlockContainer } from './UserBlock.styled';

export default function UserBlock() {
  return (
    <UserBlockContainer>
      <PhotoContainer>
        <svg width={110} height={110}>
          <use href={`${sprite}#icon-user-without-photo`} />
        </svg>
        <UploadPhoto>Upload photo</UploadPhoto>
      </PhotoContainer>
    </UserBlockContainer>    
  );
}  