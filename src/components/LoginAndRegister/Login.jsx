import { ContentContainer } from 'common/GiobalStyles';
import desctopLoginDog from '../../img/loginAndRegister/DesctopLoginDog.jpg';
import { Container, FormContainer, PetImg, Text, Title } from './RegisterAndLogin.styled';

export default function Login() {  
  return (
    <ContentContainer>
      <Container>
        <PetImg srcSet={desctopLoginDog} alt="dog" />

        <FormContainer>
          <Title>Log in</Title>
          
          <Text>Welcome! Please enter your credentials to login to the platform: </Text>
        </FormContainer>
      </Container>
    </ContentContainer>
  );
}