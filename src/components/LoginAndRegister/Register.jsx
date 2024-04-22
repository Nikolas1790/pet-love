import { ContentContainer } from 'common/GiobalStyles';
import desctopRegisterDog from '../../img/loginAndRegister/DesctopRegisterCat.jpg';
import { Container, FormContainer, PetImg, Text, Title } from './RegisterAndLogin.styled';

export default function Register() {

  return (
    <ContentContainer>
      <Container>
        <PetImg srcSet={desctopRegisterDog} alt="cat" />

        <FormContainer>
          <Title>Registration</Title>
          
          <Text>Thank you for your interest in our platform. </Text>
        </FormContainer>        
      </Container>
    </ContentContainer>
  );
}