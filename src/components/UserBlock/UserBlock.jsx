import { useSelector } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { PhotoContainer, TitleInformation, UploadPhoto, UserBlockContainer, UserInfoContainer, UserInfoItem } from './UserBlock.styled';
import { selectUser } from '../../redux/auth/selectorAuth';

export default function UserBlock() {
  const user = useSelector(selectUser);
  // const user = {
  //   avatar: null,
  //   name: "Name",
  //   email: "name@gmail.com|",
  //   phone: "+380"
  // };
console.log(user)
  return (
    <UserBlockContainer>
      <PhotoContainer>
      {user.avatar ? (
          <img src={user.avatar} alt="User Avatar" width={110} height={110} />
        ) : (
          <svg width={110} height={110}>
            <use href={`${sprite}#icon-user-without-photo`} />
          </svg>
        )}
        <UploadPhoto>Upload photo</UploadPhoto>
      </PhotoContainer>

      <TitleInformation>My information</TitleInformation>
      <UserInfoContainer>
        <UserInfoItem>{user.name}</UserInfoItem>
        <UserInfoItem>{user.email}</UserInfoItem>
        <UserInfoItem>{user.phone}</UserInfoItem>
      </UserInfoContainer>
    </UserBlockContainer>    
  );
}  