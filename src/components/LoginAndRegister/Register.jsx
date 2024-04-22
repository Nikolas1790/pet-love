import { ContentContainer } from 'common/GiobalStyles';
import desctopRegisterDog from '../../img/loginAndRegister/DesctopRegisterCat.jpg';
import { Container, FormContainer, PetImg } from './RegisterAndLogin.styled';

export default function Register() {

  return (
    <ContentContainer>
      <Container>
        <PetImg srcSet={desctopRegisterDog} alt="cat" />

        <FormContainer>
          registerrr
        </FormContainer>        
      </Container>
    </ContentContainer>
  );
}