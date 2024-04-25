import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ContentContainer } from 'common/GiobalStyles';
import { AuthorizationLink, AuthorizationLinkSpan, Container, EyeSvg, FormContainer, FormConteiner, FormField, FormFieldConteiner, FormFields, ImgContainer, PetImg, SecureMessage, SmsImg, Text, Title, TopRightSvg } from './RegisterAndLogin.styled';
import sprite from '../../img/sprite.svg';

import desctopLoginDog from '../../img/loginAndRegister/DesctopLoginDog.jpg';
import loginBlock from '../../img/loginAndRegister/loginBlock.jpg';
import { useState } from 'react';
import ButtonOrange from 'components/Buttons/ButtonOrange/ButtonOrange';
import { logIn } from '../../redux/auth/operationsAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialValues = {
  email: '',
  password: '',
};
  
const schema = Yup.object({
  email: Yup.string().matches(/^\w+([.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
});

export default function Login() {  
  const [showPassword, setShowPassword] = useState(false);  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  const handleSubmit = async (values) => {
    try {
      await dispatch(logIn(values)).unwrap();
      navigate('/profile');
    } catch (error) {
      if (error === "Request failed with status code 409") {
        toast.error("User with this email already exists.");
      } else {
        toast.error("Registration failed. Please try again later.");
      }
    }
  }
  return (
    <ContentContainer>
      <Container>
        <ImgContainer>
          <PetImg srcSet={desctopLoginDog} alt="dog" />
          <SmsImg src={loginBlock} alt='message' />
        </ImgContainer>


        <FormContainer>
          <Title>Log in</Title>          
          <Text>Welcome! Please enter your credentials to login to the platform: </Text>


          <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >
              {({ errors, touched }) => (
                <Form>
                  <FormFields page='login'>  
                    <FormConteiner>  

                      <FormFieldConteiner>
                        <FormField
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="Email" 
                          error={errors.email && touched.email ? "true" : "" } 
                          right={touched.email && !errors.email ? "true" : ""}
                        />
                        {touched.email && (
                          errors.email ? (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.email && !errors.email && <SecureMessage  error={errors.email && touched.email ? "true" : "" } >Email is secure</SecureMessage>}
                       {touched.email && errors.email && <SecureMessage  error={errors.email && touched.email ? "true" : "" }>Enter a valid Email</SecureMessage>}
                      </FormFieldConteiner>
                        
                      <FormFieldConteiner>
                        <FormField 
                          id="password" 
                          name="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Password" 
                          error={errors.password && touched.password ? "true" : "" } 
                          right={touched.password && !errors.password ? "true" : ""}
                        />
                        {touched.password && (
                          errors.password ? (
                            <TopRightSvg right="50px" >
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg right="50px" >
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.password && !errors.password && <SecureMessage error={errors.password && touched.password ? "true" : "" } >Password is secure</SecureMessage>}
                       {touched.password && errors.password && <SecureMessage error={errors.password && touched.password ? "true" : "" }>Enter a valid Password</SecureMessage>}
                       
                        {showPassword ? (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            togglePasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            togglePasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye-off`} />
                          </EyeSvg>
                        )}
                      </FormFieldConteiner> 
                            
                    </FormConteiner>   
                    <ButtonOrange label='Log In' />
                  </FormFields>                    
                </Form>
              )}
            </Formik>
            <AuthorizationLink to="/register" >Don’t have an account? <AuthorizationLinkSpan> Register</AuthorizationLinkSpan></AuthorizationLink>
        </FormContainer>
      </Container>
    </ContentContainer>
  );
}