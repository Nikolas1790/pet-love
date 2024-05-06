import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ContentContainer, Title } from 'common/GiobalStyles';
import { AuthorizationLink, AuthorizationLinkSpan, Container, EyeSvg, FormContainer, FormConteiner, FormField, FormFieldConteiner, FormFields, ImgContainer, PetImg, SecureMessage, SmsImg, Text, TopRightSvg } from './RegisterAndLogin.styled';
import { useDispatch } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { useState } from 'react';
import ButtonOrange from 'components/Buttons/ButtonOrange/ButtonOrange';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operationsAuth';

import desctopRegisterDog from '../../img/loginAndRegister/DesctopRegisterCat.jpg';
import registerBlock from '../../img/loginAndRegister/registerBlock.jpg';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
  
const schema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().matches(/^\w+([.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
  confirmPassword: Yup.string().required("Required").oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  const toggleConfigPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
  }; 
  
  const handleSubmit = async (values) => {
    const {  confirmPassword, ...dataToSend } = values; 

    try {
      await dispatch(register( dataToSend)).unwrap();
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
          <PetImg srcSet={desctopRegisterDog} alt="cat" />
          <SmsImg src={registerBlock} alt='message' />
        </ImgContainer>

        <FormContainer>
          <Title>Registration</Title>          
          <Text>Thank you for your interest in our platform. </Text>

            <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >
              {({ errors, touched }) => (
                <Form>
                  <FormFields>  
                    <FormConteiner>  
              
                      <FormFieldConteiner>
                        <FormField
                          id="name" 
                          name="name" 
                          type="name" 
                          placeholder="Name" 
                          error={errors.name && touched.name ? "true" : "" } 
                          right={touched.name && !errors.name ? "true" : ""}
                        />
                        {touched.namee && (
                          errors.name ? (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg>
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.name && !errors.name && <SecureMessage error={errors.name && touched.name ? "true" : "" }>Name is secure</SecureMessage>}
                       {touched.name && errors.name && <SecureMessage error={errors.name && touched.name ? "true" : "" }>Enter a valid Name</SecureMessage>}
                      </FormFieldConteiner>
                        
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

                      <FormFieldConteiner>
                        <FormField 
                          id="confirmPassword" 
                          name="confirmPassword" 
                          type={showConfirmPassword ? "text" : "password"} 
                          placeholder="Confirm password" 
                          error={errors.confirmPassword && touched.confirmPassword ? "true" : "" } 
                          right={touched.confirmPassword && !errors.confirmPassword ? "true" : ""}
                        />
                        {touched.confirmPassword && (
                          errors.confirmPassword ? (
                            <TopRightSvg  right="50px">
                              <use href={`${sprite}#icon-cross-small`} />
                            </TopRightSvg>
                          ) : (
                            <TopRightSvg  right="50px">
                              <use href={`${sprite}#icon-check`} />
                            </TopRightSvg>
                          )
                        )}
                       {touched.confirmPassword && !errors.confirmPassword && <SecureMessage error={errors.confirmPassword && touched.confirmPassword ? "true" : "" } >Confirm password is secure</SecureMessage>}
                       {touched.confirmPassword && errors.confirmPassword && <SecureMessage error={errors.confirmPassword && touched.confirmPassword ? "true" : "" }>Enter a valid Confirm password</SecureMessage>}

                        {showConfirmPassword ? (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            toggleConfigPasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg onMouseDown={(e) => {
                            e.preventDefault(); 
                            toggleConfigPasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye-off`} />
                          </EyeSvg>
                        )}
                      </FormFieldConteiner>
                            
                    </FormConteiner>   
                    <ButtonOrange label='Registration' />
                  </FormFields>                    
                </Form>
              )}
            </Formik>            
            <AuthorizationLink to="/login" >Already have an account? <AuthorizationLinkSpan>Login</AuthorizationLinkSpan></AuthorizationLink>
       
        </FormContainer>        
      </Container>
    </ContentContainer>
  );
}