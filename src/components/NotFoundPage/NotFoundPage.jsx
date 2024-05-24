import { ContentContainer } from "common/GiobalStyles";
import { FourText, NotFoundContainer, NotFoundImageStyled, WraperBoxNotFond, WrongMainText } from "./NotFoundPage.styled";
import ButtonNav from "components/Buttons/ButtonNav/ButtonNav";
import NotFoundImage from '../../img/notFoundPage/cat404.png';

export default function NotFoundPage() {
  return (
    <ContentContainer>
      <WraperBoxNotFond>
        <NotFoundContainer>
          <FourText>4</FourText>
          <NotFoundImageStyled src={NotFoundImage} alt="404 Not Found" />
          <FourText>4</FourText>
        </NotFoundContainer>

        <WrongMainText>Ooops! This page not found :(</WrongMainText>
        <ButtonNav to='/home' label='To home page' width='162px' />
      </WraperBoxNotFond >
    </ContentContainer>
  );
}