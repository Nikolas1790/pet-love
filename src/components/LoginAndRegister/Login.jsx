import { ContentContainer } from 'common/GiobalStyles';
import desctopLoginDog from '../../img/loginAndRegister/DesctopLoginDog.jpg';
import { Container, FormContainer, PetImg } from './RegisterAndLogin.styled';

export default function Login() {  
  return (
    <ContentContainer>
      <Container>
        <PetImg srcSet={desctopLoginDog} alt="dog" />

        <FormContainer>
          Loginnn
        </FormContainer>
      </Container>
    </ContentContainer>
  );
}